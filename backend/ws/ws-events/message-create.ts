import { Socket } from 'socket.io';
import { Params, WSEvent } from '../../types/api';
import WebSocket from '../websocket';

export default class implements WSEvent<'SEND_MESSAGE'> {
    public on = 'SEND_MESSAGE' as const;

    public async invoke(
        ws: WebSocket,
        client: Socket,
        { content }: Params.Message
    ) {
        const authorId = ws.sessions.get(client.id);
        const author = await deps.users.getSafely(authorId);

        const message: Params.Message = {
            author: await deps.users.secure(author!),
            content,
        };

        ws.io.emit('RECEIVE_MESSAGE', message);
    }
}
