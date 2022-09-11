import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAdminDto {

    username : string


    @Transform(({ value }) => value.toLowerCase())
    @IsIn(["admin","owner","user"])
    admin : string

 
    room_name: string;
}


export class LeaveRoomDto {
    username : string

    @Transform(({ value }) => value.toLowerCase())
    user_role : string

    room_name: string;
}


export class changeVisibilityDto {

    room_name : string
    @Transform(({ value }) => value.toLowerCase())
    old_type : string
    new_type: string;

    // tio remove
    owner: string;

}


export class JoinRoomDto
{
    username: string;
    room: string;
}


export class MessageDto
{
    name: string;
    room: string;
    message: string;
}


export class BannedDto{

    name: string;
    room: string;
}
