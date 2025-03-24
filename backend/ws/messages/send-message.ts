import WSEvent from "../../types/ws-event";
import Events from "../../types/events";

export default {
    on: Events["SEND_MESSAGE"],
    execute: (socket, message) => {
        socket.emit(Events["RECEIVE_MESSAGE"], message);
    },
} as WSEvent;
