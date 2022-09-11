import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ApiBody } from '@nestjs/swagger';
import { RoomDto, UserRoomDto } from './dto/room.dto';
import { TransformInterceptor } from 'src/transform.interceptor';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiBody({type : CreateRoomDto , description : "create a Room"})
  @Post('/createRoom')
  async create(@Body() createRoomDto : CreateRoomDto)
  {
       const room = await this.roomService.createRoom(createRoomDto);

       if (room)
            return room ;
       else
            throw new HttpException('room with that name already exist!!', HttpStatus.CONFLICT );
  }

  /* ---------------------------------- */

  @Get('/allRooms')
  async getAllRooms()
  {
       return await this.roomService.getAllRooms();
  }

  /* ----------------------------------  */
  @ApiBody({type : RoomDto , description : "get users of a room "})
  @Post('/usersRoom')
 @UseInterceptors(TransformInterceptor)
  async getAllUsersOfRoom(@Body() room : RoomDto)
  {
     return await this.roomService.getAllUsersOfRoom(room);
  }
}
