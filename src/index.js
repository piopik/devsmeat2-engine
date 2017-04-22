/**
 * Created by Piotrek Polus <piotrek@kroppa.pl> on 11.12.2016.
 */

import http from 'http';
import express from 'express';
import io from 'socket.io';

import Game from './game';
import Player from './player';

import config from './config';

// INIT

let app = express();
app.server = http.createServer(app);
let IO = io(app.server);

// WEBSOCKET CONNECTION

let game = new Game(IO);

IO.on('connection', function(socket) {
    console.log("New Connection");
    let player = new Player(socket, game);
});

app.server.listen(config.port);

console.log(`DEVSMEAT#2 - Engine ${config.version} started`);
console.log(`Available on port ${app.server.address().port}`);

export default app;
