/**
 * Created by Piotrek Polus <piotrek@kroppa.pl> on 22.04.2017.
 */

import shortid from 'shortid';
import names from './data/names'
import config from './config';

import arrayEqual from './tools/arrayEqual'
arrayEqual();

export default class Player {
    id ;
    socket ;
    game ;
    points = 0;
    answerLock = false;

    constructor(socket,game) {

        this.socket = socket;

        this.id = shortid.generate();
        this.game = game;

        let tmp = names.getName();
        this.name = tmp.name;
        this.color = tmp.color;

        this.socket.emit('joined',{
            name : this.name,
            color : this.color,
            id : this.id
        });

        game.players.add(this);

        game.message({
            text : this.name,
            icon : 'join',
            color : this.color,
        });

        this.socket.on('disconnect', () => {
            this.game.players.delete(this);
        });

        this.socket.on('answer', (data) => {
            if(!this.answerLock){
                this.answerLock=true;
                this.answer(data.answer);
            }
        });

    }

    answer(answer){

        if(this.game.questions[this.game.state.activeQuestion].correct.equals(answer)){

            let tmp = this.game.state.corrects, points = 0;
            this.game.state.corrects++;

            if(tmp < config.pointSystem.length ){

                points = config.pointSystem[tmp];
                this.points += points;

                this.socket.emit('questionResult',{
                    correct : true,
                    points : points
                });

                this.game.message({
                    text : this.name,
                    icon : points+'pts',
                    color : this.color,
                });

            } else {

                this.game.finishQuestion();
                this.socket.emit('questionResult',{
                    correct : true,
                    points : 0
                });

                this.game.message({
                    text : this.name,
                    icon : 'good',
                    color : this.color,
                });

            }

        } else {

            this.socket.emit('questionResult',{
                correct : false,
                points : 0
            });

            this.game.message({
                text : this.name,
                icon : 'wrong',
                color : this.color,
            });

        }
    }

    message(msg){
        this.socket.emit('message',msg);
    }
}