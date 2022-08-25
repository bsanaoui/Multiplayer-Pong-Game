"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, { cors: { origin: "http//localhost:4000" } });
io.on("connection", (socket) => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message });
    });
    console.log("client connected");
});
server.listen(4000, () => console.log("Server started on port 4000."));