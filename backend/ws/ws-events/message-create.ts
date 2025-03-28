import { Socket } from "socket.io";
import { WS, WSAction, WSEvent } from "../../types/ws";
import WebSocket from '../websocket'

export default class implements WSEvent<'SEND_MESSAGE'> {
    public on = 'SEND_MESSAGE' as const;

    public async invoke(ws: WebSocket, client: Socket, message: WS.To['SEND_MESSAGE']) {
        console.log(message);

        ws.io.emit('RECEIVE_MESSAGE', message);
    }
}