import { Socket } from "socket.io";

export default interface WSEvent {
    on: string;
    execute: (socket: Socket, ...args: any) => Promise<any> | void;
}
