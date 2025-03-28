import { io } from 'socket.io-client';
import { WS } from '../types/ws';
import store from '../store/store';
import { setUserId } from '../store/reducers/meta';

const ws = io('http://localhost:3001', {
    secure: true,
    transports: ['websocket', 'polling', 'flashsocket'],
});

ws.on('connect', () => {
    console.log('Connected to WS Server.');
    store.dispatch(setUserId(ws.id));
});

export default ws as WSClient;

interface WSClient {
    emit: <K extends keyof WS.To>(event: K, args: WS.To[K]) => any;
    on: <K extends keyof WS.From>(
        event: K | 'error' | 'disconnect',
        callback: (args: WS.From[K]) => any
    ) => any;
    off: (event: string, callback?: any) => any;
    disconnect: () => any;
}
