import { Body, Controller, Get, Post} from '@nestjs/common';
import { createRoomDto, dm_room, room_name } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { Room } from '@prisma/client';
import { add_user_room_dto } from './dto/add_user_room.dto';
import { get } from 'http';

@Controller('room')
export class RoomController {
    constructor(private roomService: RoomService){}
    cors: {
        origin: '*',
      }

    @Get('/find')
    find_room(){
        return this.roomService.find_room();
    }

    @Post('/postroom')
    post_room(@Body() createroomdto: createRoomDto){
        //console.log(createroomdto);
        return this.roomService.create_post_room(createroomdto);
    }

    @Get('/All_rooms')
    get_rooms()
    {
        return this.roomService.get_rooms();
    }

    @Get('/public_room')
    get_public_room(){
        return this.roomService.get_public_room();
    }

    @Get('/protected_room')
    get_protected_room(){
        return this.roomService.get_protected_room();
    }

    @Get('/count_users')
    get_count_user(){
        return this.roomService.get_count_user();
    }

    @Post('/Add_userRoom')
    add_user_room(@Body() addUserRoom: add_user_room_dto)
    {
        console.log(addUserRoom);
        return this.roomService.add_user_room(addUserRoom);
    }

    // @Get('/get_msg_room')
    // get_msg_room(){
    //     return this.roomService.get_msg_room();
    // }

    @Post('/post_name_room')
    post_name_room(@Body() name: room_name){
        return this.roomService.post_name_room(name);
    }

    @Post('/post_name_room_dm')
    post_name_room_dm(@Body() name: dm_room){
        return this.roomService.post_name_dm(name);
    }

    @Get('/Ban_user')
    ban_user()
    {
        return this.roomService.ban_user();
    }
    
}
