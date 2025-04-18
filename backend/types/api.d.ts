import { Socket } from 'socket.io';
import Websocket from '../ws/websocket';
import { UserDocument } from '../models/schema/user';

export declare namespace WS {
    export interface To {
        READY: Params.Token;
        SEND_MESSAGE: Params.Message;
        GUILD_CREATE: Params.Guild;
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
        createdAt?: Date;
    }

    export interface Token {
        token: string;
    }

    export interface Message {
        author: UserDocument;
        content: string;
        createdAt?: Date;
    }

    export interface Guild {
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
