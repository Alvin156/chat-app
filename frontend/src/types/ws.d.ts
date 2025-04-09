export declare namespace WS {
    export interface To {
        SEND_MESSAGE: Params.Message;
        READY: Params.Token;
        GUILD_CREATE: Params.Guild;
    }

    export interface From {
        RECEIVE_MESSAGE: Params.Message;
    }
}

export namespace Params {
    export interface User {
        _id: string;
        name: string;
        email: string;
        password: string;
    }

    export interface Token {
        token: string;
    }

    export interface Message {
        author: User;
        content: string;
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
