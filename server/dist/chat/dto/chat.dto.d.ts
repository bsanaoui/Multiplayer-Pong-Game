export declare class CreateAdminDto {
    username: string;
    admin: string;
    room_name: string;
}
export declare class LeaveRoomDto {
    username: string;
    user_role: string;
    room_name: string;
}
export declare class changeVisibilityDto {
    room_name: string;
    old_type: string;
    new_type: string;
    owner: string;
}
export declare class JoinRoomDto {
    username: string;
    room: string;
}
export declare class MessageDto {
    name: string;
    room: string;
    message: string;
}
export declare class BannedDto {
    name: string;
    room: string;
}
