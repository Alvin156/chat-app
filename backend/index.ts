import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import handleWS from "./ws-handling";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

io.on("connect", async (socket) => {
    console.log("SOCKET ID:" + socket.id);
    await handleWS(socket);
});

server.listen(3001, () => console.log("PORT RUNNING"));
