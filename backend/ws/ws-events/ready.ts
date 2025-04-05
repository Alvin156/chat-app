import { Socket } from 'socket.io';
import { Params, WSEvent } from '../../types/api';
import WebSocket from '../websocket';

export default class implements WSEvent<'READY'> {
    public on = 'READY' as const;
    public async invoke(
        ws: WebSocket,
        socket: Socket,
        { token }: Params.Token
    ) {
        const clientId = await deps.users.verifyToken(token);
        if (!clientId) throw new Error('Invalid ID.');

        ws.sessions.set(socket.id, clientId);
    }
}
