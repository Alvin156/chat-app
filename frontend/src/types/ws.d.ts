export declare namespace WS {
    export interface To {
        'SEND_MESSAGE': Params.Message;
    }

    export interface From {
        'RECEIVE_MESSAGE': Params.Message;
    }
}

export namespace Params {
    export interface Message {
        author: string;
        content: string;
    }
}
