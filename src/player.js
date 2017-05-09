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

            let tmp = this.game.corrects, points = 0;

            this.game.corrects++;

            if(this.game.corrects > config.pointSystem.length ){
                this.game.finishQuestion();
            }

            if(tmp < config.pointSystem.lengt){
                points = config.pointSystem[tmp];
            }

            this.message('CORRECT ANSWER '+ points);
            console.log('CORRECT');

        } else {
            this.message('INCORRECT ANSWER');
        }

    }

    message(text){
        this.socket.emit('message',{
            text : text
        });
    }
}