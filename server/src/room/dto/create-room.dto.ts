import { ApiProperty } from "@nestjs/swagger";
import { IsInt, isInt, IsNotEmpty, IsString } from "class-validator";

export class createRoomDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:true,description:"this input used  to add  room name"})
    name: string;
    @ApiProperty({required:true,description:"this input used  to add  room type if it's private, protected or public"})
    @IsString()
    type: string;
    @IsString()
    @ApiProperty({required:true,description:"this input used  to add password room of the protected rooms"})
    password: string;
    @IsString()
    @ApiProperty({required:true,description:"this input used  to add the owner of room"})
    owner: string;
}

export class room_name{
    @IsString()
    name: string;
}

export class dm_room{
    @IsString()
    from: string;
    @IsString()
    to: string;
}