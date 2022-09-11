import { Server, Socket } from "socket.io";
import { ChatService } from './chat.service';
import { BannedDto, changeVisibilityDto, CreateAdminDto, JoinRoomDto, LeaveRoomDto, MessageDto } from './dto/chat.dto';
export declare class ChatGateway {
    private readonly chatService;
    constructor(chatService: ChatService);
    private logger;
    server: Server;
    joinRoom(client: Socket, joinRoomDto: JoinRoomDto): Promise<void>;
    setAdmin(client: Socket, createAdminDto: CreateAdminDto): Promise<boolean>;
    leaveRoom(client: Socket, leaveRoomDto: LeaveRoomDto): Promise<boolean>;
    sendMessage(client: Socket, messageDto: MessageDto): Promise<void>;
    banned(client: Socket, bannedDto: BannedDto): Promise<void>;
    changeVisibility(client: Socket, changeVisibilityDto: changeVisibilityDto): Promise<void>;
    changePassword(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket): void;
}
