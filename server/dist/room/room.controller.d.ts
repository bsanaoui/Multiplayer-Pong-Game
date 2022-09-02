import { createRoomDto, dm_room, room_name } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { Room } from '@prisma/client';
import { add_user_room_dto } from './dto/add_user_room.dto';
export declare class RoomController {
    private roomService;
    constructor(roomService: RoomService);
    cors: {
        origin: '*';
    };
    find_room(): Promise<void>;
    post_room(createroomdto: createRoomDto): Promise<Room | import("@nestjs/common").HttpException>;
    get_rooms(): Promise<{
        owner: string;
        name: string;
    }[]>;
    get_public_room(): Promise<{
        _count: {
            users_room: number;
        };
        owner: string;
        name: string;
    }[]>;
    get_protected_room(): Promise<{
        _count: {
            users_room: number;
        };
        owner: string;
        name: string;
    }[]>;
    get_count_user(): Promise<number>;
    add_user_room(addUserRoom: add_user_room_dto): Promise<import(".prisma/client").Users_room>;
    post_name_room(name: room_name): Promise<{
        from: string;
        content_msg: string;
    }[]>;
    post_name_room_dm(name: dm_room): Promise<{
        from: string;
        content_msg: string;
        to: string;
    }[]>;
    ban_user(): Promise<import(".prisma/client").Users_room>;
}
