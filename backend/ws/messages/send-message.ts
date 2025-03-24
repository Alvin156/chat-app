import WSEvent from "../../types/ws-event";

export default {
    on: "SEND_MESSAGE",
    execute: (socket, message) => {
        socket.emit("RECEIVE_MESSAGE", message);
    },
} as WSEvent;
