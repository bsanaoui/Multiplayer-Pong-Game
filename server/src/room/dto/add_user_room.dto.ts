import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class add_user_room_dto{
    @IsString()
    @ApiProperty({required:true,description:"this input used to add user to room"})
    user_id: string;
    @IsString()
    @ApiProperty({required:true,description:"this input used to add user_role in the room"})
    user_role: string;
    @IsString()
    @ApiProperty({required:true,description:"this input used to add room"})
    room_id: string;
    @IsString()
    @ApiProperty({required:true,description:"this input used to add state_user"})
    state_user: string;
}