import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Console } from 'console';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomDto } from './dto/room.dto';


@Injectable()
export class RoomService {
  constructor(private prisma :PrismaService) {}

  async createRoom(createRoomDto : CreateRoomDto) {

    const roomCount = await this.prisma.room.count
    (
      {
        where : {
          name : createRoomDto.name
        }
      }
    )
    if (roomCount != 0)
    {
      console.log("room already exist\n");
      return null;
    }
    const createUserInRoom = await this.prisma.users_room.create
    ({
        data : {
          user : {
            connect : {
              username : createRoomDto.username
            },
          },
          room : {
            create : 
              {
                name : createRoomDto.name,
                type : createRoomDto.type,
                password : createRoomDto.password,
                owner :createRoomDto.username
              },
          },
          user_role : 'owner',
          state_user : ""
        }
        });
    return createUserInRoom;
  }

  //--------------------------------------------------

  async getAllRooms() {
    const allRooms = await this.prisma.room.findMany({
      select : {
        name : true,
        type : true,
        owner : true,
      }
    });
    return allRooms;
  }

   /* -------------------------------------------------- */

   
  async getAllUsersOfRoom(room : RoomDto)
  {
    // return await this.prisma.$queryRaw
    return await this.prisma.users_room.findMany({
          orderBy: {
               user_role: 'asc',
          },
          where : {room_name :  room.name},
          select :{
              username :true,
              user_role : true,
              user : {
                  select :{
                    id : true,
                    avatar : true
                  }
            }
          },
          
        })

     
}
}
