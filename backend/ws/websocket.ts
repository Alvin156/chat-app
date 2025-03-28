import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import { WS, WSEvent } from '../types/ws';
import { lstatSync, readdirSync } from 'fs';

export default class WebSocket {
    public events = new Map<keyof WS.To, WSEvent<keyof WS.To>>();
    public io: SocketServer;
    public sessions: [{ id: string }] | any[] = [];

    public async init(server: Server) {
        this.io = new SocketServer(server, {
            cors: {
                origin: ['http://localhost:3000'],
                methods: ['GET', 'POST'],
            },
        });

        await this.handleEvents();
        console.log(`Loaded ${this.events.size} events.`);

        this.io.on('connection', (client) => {
            for (const event of this.events.values())
                client.on(event.on, async (data) => {
                    // NOTE: Use ws.io.emit() in events.
                    try {
                        await event.invoke.call(event, this, client, data);
                    } catch (error) {
                        client.emit('error', error);
                    }
                });
        });
    }

    private async handleEvents(dir = `${__dirname}\\ws-events`) {
        const files = readdirSync(dir);
        for (const file of files) {
            const filePath = `${dir}\\${file}`;
            const stat = lstatSync(filePath);
            if (stat.isDirectory()) {
                this.handleEvents(filePath);
                continue;
            }

            const Event = (await require(filePath)).default;
            const event: WSEvent<any> = new Event();

            this.events.set(event.on, event);
        }
    }
}
