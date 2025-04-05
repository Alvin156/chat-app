import { Socket } from 'socket.io';
import Websocket from '../ws/websocket';

export declare namespace WS {
    export interface To {
        SEND_MESSAGE: Params.Message;
        READY: Params.Token;
    }

    export interface From {
        RECEIVE_MESSAGE: Params.Message;
    }
}

export namespace Params {
    export interface User {
        _id?: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
    }

    export interface Token {
        token: string;
    }

    export interface Message {
        author: string;
        content: string;
    }
}

export interface WSAction<K extends keyof WS.From> {
    event: K;
    data: any;
    broadcast?: boolean;
}

export interface WSEvent<K extends keyof WS.To> {
    on: K;
    invoke: (ws: Websocket, socket: Socket, params: WS.To[K]) => {};
}
