import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddUserRoomDto } from './dto/addUser-room.dto';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    constructor(readonly prisma : PrismaService){}

    async createUser(createUserDto : CreateUserDto)
    {
        const userCount = await this.prisma.user.count
        (
          {
            where : {
              username : createUserDto.login
            }
          }
        )
        if (userCount != 0)
          return null;


        const createUser = await this.prisma.user.create({
          data : createUserDto
        });

        return createUser;
    }

    //----------------------------------------
    
    async getUsers()
    {
      const users = await this.prisma.user.findMany({
        select : {
          username : true
        }
      });
      return users
    }

    //----------------------------------------

    async addUserToRoom(addUserRoomDto : AddUserRoomDto)
    {
          const createUserInRoom = await this.prisma.users_room.create({
            data : {
              user : {
                connect : {
                  username : addUserRoomDto.username
                },
              },
              room : {
                connect : {
                  name : addUserRoomDto.room_name
                },
              },
              user_role : 'user', 
              state_user : ""
            }
          });
      return createUserInRoom;
  
    }
  
}
