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
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("./chat.service");
const chat_dto_1 = require("./dto/chat.dto");
let ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
        this.logger = new common_1.Logger('CHAT');
    }
    async joinRoom(client, joinRoomDto) {
        const ret = await this.chatService.joinRoom(client, joinRoomDto);
        client.join(joinRoomDto.room);
        this.server.to(joinRoomDto.room).emit("joined", ret);
    }
    async setAdmin(client, createAdminDto) {
        const ret = await this.chatService.setAdmin(createAdminDto);
        if (ret === -1)
            throw new websockets_1.WsException(`${createAdminDto.username} is not  owner of ${createAdminDto.room_name}`);
        else if (ret === -2)
            throw new websockets_1.WsException(`${createAdminDto.username} is owner of ${createAdminDto.room_name}`);
        else if (ret === -3)
            throw new websockets_1.WsException(`${createAdminDto.admin} not joining ${createAdminDto.room_name}`);
        else if (ret === -4)
            throw new websockets_1.WsException(`${createAdminDto.admin} is already an admin in ${createAdminDto.room_name}`);
        return this.server.to(createAdminDto.room_name).emit("setAdmin", ret);
    }
    async leaveRoom(client, leaveRoomDto) {
        const ret = await this.chatService.leaveRoom(leaveRoomDto);
        if (ret === -1)
            throw new websockets_1.WsException(`the data  [ ${leaveRoomDto.username} , ${leaveRoomDto.user_role} , ${leaveRoomDto.room_name} ] is incorrect`);
        return this.server.to(leaveRoomDto.room_name).emit("leaveRoom", { "status": true, "message": `${leaveRoomDto.username} left room successfully`, object: ret });
    }
    async sendMessage(client, messageDto) {
        const ret = await this.chatService.sendMessage(client, messageDto);
        if (ret === -1)
            throw new websockets_1.WsException(`the data  [ ${messageDto.name} , ${messageDto.room} ] is incorrect`);
        else if (ret === 1)
            this.server.to(messageDto.room).except(messageDto.room + 'Banned').emit('msgToClient', messageDto);
    }
    async banned(client, bannedDto) {
        const ret = await this.chatService.ban(client, bannedDto);
        var socket;
        socket = ret;
        this.server.sockets.sockets.get(ret).join(bannedDto.room + "Banned");
        this.server.sockets.sockets.get(ret).leave(bannedDto.room);
        this.server.to(bannedDto.room).except(bannedDto.room + 'Banned').emit('banned', { "message": `${bannedDto.name} banned from room  ${bannedDto.room} successfully`, "object": ret });
    }
    async changeVisibility(client, changeVisibilityDto) {
        const ret = await this.chatService.changeVisibility(changeVisibilityDto);
        if (ret === -1)
            throw new websockets_1.WsException(`the data  [ ${changeVisibilityDto.room_name} , ${changeVisibilityDto.old_type} , ${changeVisibilityDto.owner} is incorrect`);
        if (ret === -3)
            throw new websockets_1.WsException(`use set password option`);
        else
            this.server.to(changeVisibilityDto.room_name).except(changeVisibilityDto.room_name + 'Banned').emit('changeVisibility', { "status": true, "message": `visibility is changed`, object: ret });
    }
    async changePassword(client) {
        const ret = await this.chatService.changePassword();
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
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chat_dto_1.JoinRoomDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "joinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('setAdmin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chat_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "setAdmin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chat_dto_1.LeaveRoomDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "leaveRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chat_dto_1.MessageDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "sendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('banned'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chat_dto_1.BannedDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "banned", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('changeVisibility'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, chat_dto_1.changeVisibilityDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "changeVisibility", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('changePassword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "changePassword", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map