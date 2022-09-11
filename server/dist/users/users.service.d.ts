import { PrismaService } from '../prisma/prisma.service';
import { AddUserRoomDto } from './dto/addUser-room.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    createUser(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    getUsers(): Promise<{
        username: string;
    }[]>;
    addUserToRoom(addUserRoomDto: AddUserRoomDto): Promise<import(".prisma/client").Users_room>;
}
