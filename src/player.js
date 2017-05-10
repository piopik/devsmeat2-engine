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

        this.socket.on('disconnect', () => {
            this.game.players.delete(this);
        });

        this.socket.on('answer', (data) => {
            this.answer(data.answer);
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

            } else {

                this.game.finishQuestion();
                this.socket.emit('questionResult',{
                    correct : true,
                    points : 0
                });

            }

        } else {
            this.socket.emit('questionResult',{
                correct : false,
                points : 0
            });
        }

    }

    message(text){
        this.socket.emit('message',{
            text : text
        });
    }
}