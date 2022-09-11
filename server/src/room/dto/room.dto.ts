import { ApiProperty } from "@nestjs/swagger"

export class RoomDto
{
    @ApiProperty({description : "name of room "})
    name : string
}

export class UserRoomDto
{
    id          : number
    username    : string
    avatar      : string
    user_role   : string
}