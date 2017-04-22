/**
 * @author Piotrek Polus / SoInteractive <ppolus@sointeractive.pl>
 */

import fs from "fs";
import path from "path";
import game from "./game";


export default class{
    array = [];

    add(player){

        this.array.push(player);

        player.game.socket.emit('message',{
            text : `Player ${player.name} joined`
        });
    };

    delete(player){
        for(var i = this.array.length - 1; i >= 0; i--) {
            if(this.array[i].id === player.id) {
                this.array.splice(i, 1);
            }
        }

        player.game.socket.emit('message',{
            text : `Player ${player.name} left`
        });
    };

    get(id) {
        for(var i = this.array.length - 1; i >= 0; i--) {
            if(this.array[i].id === id) {
                return this.array[i]
            }
        }
    };

    getSocket(id) {
        if(id) {
            for(var i = this.array.length - 1; i >= 0; i--) {
                if(this.array[i].id === id) {
                    return this.array[i].socket;
                }
            }
        }
    }
}