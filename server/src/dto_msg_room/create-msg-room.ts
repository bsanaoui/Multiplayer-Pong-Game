import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class create_dto_msg{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:true,description:"this input used  to add  room name"})
    name: string;
    @IsString()
    text: string;
}

export class dto_user_room{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:true,description:"this input used  to add  room name"})
    name: string;
    @ApiProperty({required:true,description:"this input used  to add  user name"})
    room: string;
    @ApiProperty({required:true,description:"this input used  to add  user name"})
    message: string;
}