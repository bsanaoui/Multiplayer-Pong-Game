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
const prisma_service_1 = require("../prisma/prisma.service");
let RoomService = class RoomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRoom(createRoomDto) {
        const roomCount = await this.prisma.room.count({
            where: {
                name: createRoomDto.name
            }
        });
        if (roomCount != 0) {
            console.log("room already exist\n");
            return null;
        }
        const createUserInRoom = await this.prisma.users_room.create({
            data: {
                user: {
                    connect: {
                        username: createRoomDto.username
                    },
                },
                room: {
                    create: {
                        name: createRoomDto.name,
                        type: createRoomDto.type,
                        password: createRoomDto.password,
                        owner: createRoomDto.username
                    },
                },
                user_role: 'owner',
                state_user: ""
            }
        });
        return createUserInRoom;
    }
    async getAllRooms() {
        const allRooms = await this.prisma.room.findMany({
            select: {
                name: true,
                type: true,
                owner: true,
            }
        });
        return allRooms;
    }
    async getAllUsersOfRoom(room) {
        return await this.prisma.users_room.findMany({
            orderBy: {
                user_role: 'asc',
            },
            where: { room_name: room.name },
            select: {
                username: true,
                user_role: true,
                user: {
                    select: {
                        id: true,
                        avatar: true
                    }
                }
            },
        });
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map