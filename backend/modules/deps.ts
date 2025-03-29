import Rest from '../rest/server';
import WebSocket from '../ws/websocket';

export interface Deps {
    rest: Rest;
    websocket: WebSocket;
}

const deps: Deps = {
    rest: new Rest(),
    websocket: new WebSocket(),
}

global['deps'] = deps;