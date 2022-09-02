import { HttpException } from "@nestjs/common";
import { Server, Socket } from "socket.io";
import { PrismaService } from 'src/prisma/prisma.service';
import { dto_user_room } from "./dto_msg_room/create-msg-room";
export declare class AppGateway {
    private prisma;
    constructor(prisma: PrismaService);
    myMap: Map<unknown, unknown>;
    server: Server;
    private logger;
    hello(): void;
    afterInit(server: Server): void;
    step1Tojoinroom(client: Socket, infos: dto_user_room): Promise<HttpException>;
    join_room(client: Socket, infos: dto_user_room): Promise<HttpException>;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket): void;
}
