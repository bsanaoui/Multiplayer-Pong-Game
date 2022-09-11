import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty,IsString } from "class-validator";


export class AddUserRoomDto {
 
    @ApiProperty({description : " username"})
    @IsNotEmpty()
    @IsString()
    username : string

    @ApiProperty({description : " room name "})
    @IsNotEmpty()
    @IsString()
    room_name : string

    // @ApiProperty({description : " room name "})
    // @IsNotEmpty()
    // @IsString()
    // state_user : string
}