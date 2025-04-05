import Users from '../models/data/users';
import REST from '../rest/server';
import WebSocket from '../ws/websocket';

export interface Deps {
    rest: REST;
    websocket: WebSocket;
    users: Users;
}

const deps: Deps = {
    rest: new REST(),
    websocket: new WebSocket(),
    users: new Users(),
};

global['deps' as any] = deps;
