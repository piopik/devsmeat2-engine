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
        this.state.round++;

        console.log(`SENDQUESTION (${this.state.activeQuestion})`);

        this.socket.emit('question',{
            question: this.questions[this.state.activeQuestion]
        });

        this.timeout = setTimeout(() => {
            this.finishQuestion();
        }, config.answerTime)

    }

    finishQuestion(){

        console.log("FINISHQUESTION");

        clearTimeout(this.timeout);

        if(this.state.round< config.roundsLimit){

            this.sendLeaderboard();

            this.timeout = setTimeout(() => {
                this.startQuestion();
            }, config.leaderboardTime)

        } else {

            this.finishGame();

        }


    }

    sendLeaderboard(){

        console.log(`SENDLEADERBOARD (${this.state.round})`);

    }

    finishGame(){

        console.log("FINISHGAME");

    }

}