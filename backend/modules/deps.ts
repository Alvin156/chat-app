import Messages from '../models/data/messages';
import Users from '../models/data/users';
import REST from '../rest/server';
import WebSocket from '../ws/websocket';

export interface Deps {
    rest: REST;
    websocket: WebSocket;
    users: Users;
    messages: Messages;
}

const deps: Deps = {
    rest: new REST(),
    websocket: new WebSocket(),
    users: new Users(),
    messages: new Messages(),
};

global['deps' as any] = deps;
