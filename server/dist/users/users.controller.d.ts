import { AddUserRoomDto } from './dto/addUser-room.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    getUsers(): Promise<{
        username: string;
    }[]>;
    addUserToRoom(addUserToRoom: AddUserRoomDto): Promise<import(".prisma/client").Users_room>;
}
