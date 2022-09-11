import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomDto } from './dto/room.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    create(createRoomDto: CreateRoomDto): Promise<import(".prisma/client").Users_room>;
    getAllRooms(): Promise<{
        type: string;
        name: string;
        owner: string;
    }[]>;
    getAllUsersOfRoom(room: RoomDto): Promise<{
        user: {
            id: number;
            avatar: string;
        };
        user_role: string;
        username: string;
    }[]>;
}
