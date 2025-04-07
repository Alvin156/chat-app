import { Socket } from 'socket.io';
import Websocket from '../ws/websocket';

export declare namespace WS {
    export interface To {
        READY: Params.Token;
        SEND_MESSAGE: Params.Message;
        ROOM_CREATE: Params.Room;
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
        author: User;
        content: string;
    }

    export interface Room {
        guildId: string;
        ownerId: string;
        name: string;
        createdAt: Date;
        inviteCode: string;
        members: User[];
        /**     Add logo functionality later.
         *       guildAvatarURL: string;
         */
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
