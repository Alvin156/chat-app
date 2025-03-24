import { Socket } from "socket.io";
import Events from "./events";

export default interface WSEvent {
    on: Events;
    execute: (socket: Socket, ...args: any) => Promise<any> | void;
}
