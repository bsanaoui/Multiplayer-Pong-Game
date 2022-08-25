import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { getUsers, userJoin, userLeave } from './users';


const app = express();

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "http//localhost:4000" } });

io.on("connection", (socket) => {
    socket.join("myChat");
    socket.on('handle-connection', (username: string) => {
        if (!userJoin(socket.id, username)) {
            socket.emit("username-taken")
        } else {
            socket.emit("username-submitted-successfully");
            io.to("myChat").emit("get-connected-users", getUsers())
        }
    })

    socket.on("disconnect", () => {
        userLeave(socket.id);
    })
})

server.listen(4000, () => console.log("Server started on port 4000."));

