import express from 'express';
import cors from 'cors';
import http from 'http';
import WebSocket from './ws/websocket';

const app = express();
app.use(cors());

const server = http.createServer(app);

new WebSocket().init(server);

server.listen(3001, () => console.log('PORT RUNNING'));

/**
 * socket.on(event.on, async (data) => {
 *  for (const action of event.invoke.call(...some params)) {
 *      handle(action);
 *  }
 * })
 */
