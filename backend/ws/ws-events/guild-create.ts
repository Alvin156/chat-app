import { Socket } from 'socket.io';
import { Params, WSEvent } from '../../types/api';
import WebSocket from '../websocket';

export default class implements WSEvent<'GUILD_CREATE'> {
    public on = 'GUILD_CREATE' as const;

    public async invoke(ws: WebSocket, client: Socket, { name }: Params.Guild) {
        // TODO: Create room model, and update user guildIds.
        const authorId = ws.sessions.get(client.id);
        const author = await deps.users.getSafely(authorId);

        const content = `Created a new server "${name}"`;
        ws.io.emit('RECEIVE_MESSAGE', { author, content });
    }
}
