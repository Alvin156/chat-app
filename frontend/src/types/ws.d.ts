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
        name: string;
        email: string;
        password: string;
    }

    export interface Token {
        token: string;
    }

    export interface Message {
        author: string;
        content: string;
    }
}
