import { PrismaService } from '../prisma/prisma.service';
import { BannedDto, changeVisibilityDto, CreateAdminDto, JoinRoomDto, LeaveRoomDto, MessageDto } from './dto/chat.dto';
import { Socket } from "socket.io";
export declare class ChatService {
    private prisma;
    constructor(prisma: PrismaService);
    myMap: Map<string, string[]>;
    banned: string[];
    joinRoom(client: Socket, joinRoomDto: JoinRoomDto): Promise<any>;
    setAdmin(createAdminDto: CreateAdminDto): Promise<import(".prisma/client").Users_room | -1 | -2 | -3 | -4>;
    leaveOwner(leaveRoomDto: LeaveRoomDto): Promise<import(".prisma/client").Room | (import(".prisma/client").Users_room & {
        room: import(".prisma/client").Room;
    })>;
    leave(leaveRoomDto: LeaveRoomDto): Promise<import(".prisma/client").Users_room>;
    leaveRoom(leaveRoomDto: LeaveRoomDto): Promise<import(".prisma/client").Users_room | import(".prisma/client").Room | -1>;
    changeVisibility(changeVisibilityDto: changeVisibilityDto): Promise<import(".prisma/client").Room | -1 | -2 | -3>;
    changePassword(): Promise<void>;
    sendMessage(client: Socket, messageDto: MessageDto): Promise<0 | 1 | -1>;
    ban(client: Socket, bannedDto: BannedDto): Promise<any>;
}
