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

    };

    delete(player){
        for(var i = this.array.length - 1; i >= 0; i--) {
            if(this.array[i].id === player.id) {
                this.array.splice(i, 1);
            }
        }

        player.message(`Player ${player.name} left`);
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
    };

    getLeaderboard() {
        let lboard = [];

        for(var i = this.array.length - 1; i >= 0; i--) {
            lboard.push({
                id : this.array[i].id,
                name : this.array[i].name,
                color : this.array[i].color,
                points : this.array[i].points,
            })
        }

        lboard.sort(function(a, b) {
            return b.points - a.points;
        });

        let position = 1;
        let interval = 1;
        for(let i = 0; i < lboard.length; i++) {
            lboard[i].position = position;

            if(lboard[i+1] && lboard[i+1].points < lboard[i].points){
                position += interval;
                interval = 1;

            } else {
                interval++;
            }
        }

        return lboard;
    }
}