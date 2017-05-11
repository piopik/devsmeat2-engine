/**
 * Created by Piotrek Polus <piotrek@kroppa.pl> on 22.04.2017.
 */

import fs from "fs";
import path from "path";

import PlayerList from './playerList';
import config from './config';

export default class Game{
    status = "new"; // new question leaderboard finish

    players ;
    questions = [];

    state = {
        round : 0,
        activeQuestion : false,
        corrects : 0
    };

    constructor(socket) {
        this.socket = socket;

        this.players = new PlayerList();
        this.status = 'new';

        let normalizedPath = path.join(__dirname, "data/questions.json");
        this.questions = JSON.parse(fs.readFileSync(normalizedPath, 'utf8'));

        this.answersAmount = 0;
        this.currentAnswer = 0;

        this.socket.on('disconnect',  () => {
            this.disconnect();
        });

        this.startQuestion();
    }

    startQuestion(){
        clearTimeout(this.timeout);

        this.state.activeQuestion = Math.floor(Math.random() * this.questions.length);
        this.state.corrects = 0;
        this.state.round++;

        console.log(`STARTQUESTION (${this.state.activeQuestion})`);

        this.socket.emit('question',{
            "question":this.questions[this.state.activeQuestion].question,
            "type":this.questions[this.state.activeQuestion].type,
            "answers":this.questions[this.state.activeQuestion].answers
        });

        this.timeout = setTimeout(() => {
            this.finishQuestion();
        }, config.answerTime)

    }

    finishQuestion(){

        console.log("FINISHQUESTION");

        clearTimeout(this.timeout);

        this.socket.emit('questionFinish',{
            'questionFinish' : true
        });

        if(this.state.round< config.roundsLimit){
            this.startLeaderboard();
        } else {
            this.finishGame();
        }

    }

    startLeaderboard(){
        console.log(`STARTLEADERBOARD (${this.state.round})`);

        clearTimeout(this.timeout);

        this.socket.emit('leaderboard',{
            'leaderboard' : this.players.getLeaderboard()
        } );

        this.timeout = setTimeout(() => {
            this.finishLeaderboard();
        }, config.leaderboardTime)

    }

    finishLeaderboard(){
        console.log("FINISHLEADERBOARD");

        clearTimeout(this.timeout);

        this.socket.emit('leaderboardFinish',{
            'leaderboardFinish' : true
        } );

        this.startQuestion();
    }

    finishGame(){
        console.log("FINISHGAME");

        this.socket.emit('gameFinish',{} );
        this.socket.emit('leaderboard',{} );

    }

    message(text){
        this.socket.emit('message',{
            text : text
        });
    }

}