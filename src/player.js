/**
 * Created by Piotrek Polus <piotrek@kroppa.pl> on 22.04.2017.
 */

import shortid from 'shortid';
import names from './data/names'

export default class Player {
    id ;
    socket ;
    game ;

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
            this.answer(data);
        });

    }

    answer(data){
        
    }

}