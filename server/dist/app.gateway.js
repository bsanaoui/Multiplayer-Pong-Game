"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const prisma_service_1 = require("./prisma/prisma.service");
const create_msg_room_1 = require("./dto_msg_room/create-msg-room");
let AppGateway = class AppGateway {
    constructor(prisma) {
        this.prisma = prisma;
        this.myMap = new Map([]);
        this.logger = new common_1.Logger('AppGateway');
    }
    hello() {
        console.log("hello world");
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    async step1Tojoinroom(client, infos) {
        console.log(infos);
        client.join(infos.room);
        const usercount = await this.prisma.users_room.count({
            where: {
                user_id: infos.name,
                room_id: infos.room,
            }
        });
        if (usercount == 0) {
            const newUserRoom = await this.prisma.users_room.create({
                data: { user_id: infos.name, user_role: "user", room_id: infos.room, state_user: "" },
            });
        }
        else {
            return new common_1.HttpException('User already exist in room', common_1.HttpStatus.FOUND);
        }
    }
    async join_room(client, infos) {
        this.server.to(infos.room).emit('msgToClient', infos);
        const userCount = await this.prisma.user.count({
            where: {
                username: infos.name,
            }
        });
        if (userCount == 1) {
            const newmsg = await this.prisma.messageRoom.create({
                data: { creationDate: new Date(), from: infos.name, room_name: infos.room, content_msg: infos.message },
            });
        }
        else {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleConnection(client) {
        this.logger.log(`Client connected: ${client.id}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], AppGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "hello", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('JoinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, create_msg_room_1.dto_user_room]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "step1Tojoinroom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('SendMessageRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, create_msg_room_1.dto_user_room]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "join_room", null);
AppGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        }
    }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppGateway);
exports.AppGateway = AppGateway;
//# sourceMappingURL=app.gateway.js.map