import fs from "fs";
import { Socket } from "socket.io";
import WSEvent from "./types/ws-event";

const handleWS = async (socket: Socket, dir = `${__dirname}\\ws`) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const stat = fs.lstatSync(`${dir}\\${file}`);
        if (stat.isDirectory()) {
            handleWS(socket, `${dir}\\${file}\\`);
            continue;
        }

        const { default: WSEVENT } = await import(`${dir}\\${file}`);
        // * TODO: Try to get rid of WSEVENT and instead add type directly.
        const wsEvent: WSEvent = WSEVENT;
        if (!wsEvent) continue;

        socket.on(wsEvent.on, (...args) => {
            wsEvent.execute(socket, ...args);
        });
        console.log(`Loaded websocket event: '${wsEvent.on}'`);
    }
};

export default handleWS;
