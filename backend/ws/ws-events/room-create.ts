import { Socket } from 'socket.io';
import { WSEvent } from '../../types/api';
import WebSocket from '../websocket';

export default class implements WSEvent<'ROOM_CREATE'> {
    public on = 'ROOM_CREATE' as const;

    public async invoke(ws: WebSocket, client: Socket) {}
}
