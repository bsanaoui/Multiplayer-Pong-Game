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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const create_room_dto_1 = require("./dto/create-room.dto");
const room_service_1 = require("./room.service");
const add_user_room_dto_1 = require("./dto/add_user_room.dto");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    find_room() {
        return this.roomService.find_room();
    }
    post_room(createroomdto) {
        return this.roomService.create_post_room(createroomdto);
    }
    get_rooms() {
        return this.roomService.get_rooms();
    }
    get_public_room() {
        return this.roomService.get_public_room();
    }
    get_protected_room() {
        return this.roomService.get_protected_room();
    }
    get_count_user() {
        return this.roomService.get_count_user();
    }
    add_user_room(addUserRoom) {
        console.log(addUserRoom);
        return this.roomService.add_user_room(addUserRoom);
    }
    post_name_room(name) {
        return this.roomService.post_name_room(name);
    }
    post_name_room_dm(name) {
        return this.roomService.post_name_dm(name);
    }
    ban_user() {
        return this.roomService.ban_user();
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "find_room", null);
__decorate([
    (0, common_1.Post)('/postroom'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.createRoomDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "post_room", null);
__decorate([
    (0, common_1.Get)('/All_rooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "get_rooms", null);
__decorate([
    (0, common_1.Get)('/public_room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "get_public_room", null);
__decorate([
    (0, common_1.Get)('/protected_room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "get_protected_room", null);
__decorate([
    (0, common_1.Get)('/count_users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "get_count_user", null);
__decorate([
    (0, common_1.Post)('/Add_userRoom'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_room_dto_1.add_user_room_dto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "add_user_room", null);
__decorate([
    (0, common_1.Post)('/post_name_room'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.room_name]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "post_name_room", null);
__decorate([
    (0, common_1.Post)('/post_name_room_dm'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.dm_room]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "post_name_room_dm", null);
__decorate([
    (0, common_1.Get)('/Ban_user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "ban_user", null);
RoomController = __decorate([
    (0, common_1.Controller)('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=room.controller.js.map