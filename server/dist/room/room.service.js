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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
let RoomService = class RoomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async find_room() {
        const newRoom = await this.prisma.room.findMany({});
        console.log(newRoom);
    }
    async create_post_room(createRoomDto) {
        const hash = await argon.hash(createRoomDto.password);
        const name = createRoomDto.name;
        const userCount = await this.prisma.user.count({
            where: {
                username: createRoomDto.owner
            }
        });
        const identif = await this.prisma.room.count({
            where: {
                name: createRoomDto.name,
                owner: createRoomDto.owner
            }
        });
        if (userCount == 1 && identif == 0) {
            const newroom = {
                name: createRoomDto.name,
                type: createRoomDto.type,
                password: hash,
                owner: createRoomDto.owner,
                users_room: {
                    create: {
                        user_id: createRoomDto.owner,
                        user_role: 'owner',
                        state_user: '',
                    }
                }
            };
            const new_user_room = await this.prisma.room.create({ data: newroom });
            return (new_user_room);
        }
        else {
            return new common_1.HttpException('Already exist', common_1.HttpStatus.FOUND);
        }
    }
    async get_rooms() {
        const getrooms = await this.prisma.room.findMany({
            select: {
                name: true,
                owner: true,
            }
        });
        return (getrooms);
    }
    async get_public_room() {
        const getinfo = await this.prisma.room.findMany({
            where: {
                type: 'public',
            },
            select: {
                _count: {
                    select: {
                        users_room: true,
                    }
                },
                name: true,
                owner: true,
                type: false,
                password: false,
            },
        });
        console.log(getinfo);
        return (getinfo);
    }
    async get_protected_room() {
        const getinfo = await this.prisma.room.findMany({
            where: {
                type: 'protected',
            },
            select: {
                _count: {
                    select: {
                        users_room: true,
                    }
                },
                name: true,
                owner: true,
                type: false,
                password: false,
            },
        });
        console.log(getinfo);
        return (getinfo);
    }
    async get_count_user() {
        const count_user = await this.prisma.users_room.count({
            where: {
                room_id: 'room1',
            },
        });
        console.log(count_user);
        return (count_user);
    }
    async add_user_room(addUserRoom) {
        const add_user = await this.prisma.users_room.create({
            data: {
                user_id: addUserRoom.user_id,
                user_role: addUserRoom.user_role,
                room_id: addUserRoom.room_id,
                state_user: addUserRoom.state_user,
            }
        });
        return (add_user);
    }
    async post_name_room(name) {
        const msgs = await this.prisma.messageRoom.findMany({
            where: { room_name: name.name },
            select: {
                from: true,
                content_msg: true,
                room_name: false,
                id: false,
                creationDate: false
            }
        });
        return (msgs);
    }
    async post_name_dm(name) {
        const msgs = await this.prisma.directMessage.findMany({
            where: {
                OR: [
                    {
                        from: name.from, to: name.to,
                    },
                    {
                        from: name.to, to: name.from
                    },
                ]
            },
            select: {
                from: true,
                to: true,
                content_msg: true,
                id: false,
                creationDate: false
            }
        });
        return (msgs);
    }
    async ban_user() {
        const user_id = await this.prisma.users_room.findFirst({
            where: {
                user_id: "Hamza",
            },
        });
        const ban = await this.prisma.users_room.update({
            where: {
                id: user_id.id,
            },
            data: {
                state_user: "baned",
            },
        });
        return (ban);
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map