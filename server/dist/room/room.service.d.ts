import { HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { add_user_room_dto } from './dto/add_user_room.dto';
import { createRoomDto, dm_room, room_name } from './dto/create-room.dto';
export declare class RoomService {
    private prisma;
    constructor(prisma: PrismaService);
    find_room(): Promise<void>;
    create_post_room(createRoomDto: createRoomDto): Promise<import(".prisma/client").Room | HttpException>;
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
    post_name_dm(name: dm_room): Promise<{
        from: string;
        content_msg: string;
        to: string;
    }[]>;
    ban_user(): Promise<import(".prisma/client").Users_room>;
}
