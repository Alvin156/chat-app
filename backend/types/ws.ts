import { Socket } from "socket.io";
import Websocket from "../ws/websocket";

export declare namespace WS {
    export interface To {
        'SEND_MESSAGE': Params.Message;
    }

    export interface From {
        'RECEIVE_MESSAGE': Params.Message
    }
}

export namespace Params {
    export interface Message {
        content: string;
    }
}

export interface WSAction<K extends keyof WS.From> {
    name: K;
    data: any
}

export interface WSEvent<K extends keyof WS.To> {
    on: K;
    invoke: (ws: Websocket, socket: Socket, params: WS.To[K]) => {};
}
