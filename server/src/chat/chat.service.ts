import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BannedDto, changeVisibilityDto, CreateAdminDto, JoinRoomDto, LeaveRoomDto, MessageDto } from './dto/chat.dto';
import { Server, Socket } from "socket.io";

@Injectable()
export class ChatService {

  constructor(private prisma :PrismaService) {}
  myMap = new Map<string,string[]>();
  banned: string[] = [];


  /* ************************************ */

  async joinRoom(client : Socket , joinRoomDto : JoinRoomDto)
  {
      let new_join;
      const count = await this.prisma.users_room.count({
          where: {
            username: joinRoomDto.username,
            room_name: joinRoomDto.room,
          }
      });
      if (count === 0)
      {
         new_join = await this.prisma.users_room.create({
            data:
            { 
              username: joinRoomDto.username,
              user_role: "user", 
              room_name: joinRoomDto.room, 
              state_user: ""
            }
          });
      }
      this.myMap[joinRoomDto.username].push(client.id) ;
      console.log(this.myMap);
      return (new_join);
  }

  /* ************************************ */



   async setAdmin(createAdminDto : CreateAdminDto )
   {
      let count = await this.prisma.users_room.count({
        where :{
          username : createAdminDto.username,
          user_role : "owner",
          room_name : createAdminDto.room_name
        }
      });

      /* username is not owner */
      if (count == 0)  return (-1);
      if( createAdminDto.admin === createAdminDto.username)  return (-2);
      /* check if future admin is already in that room */
      const futurAdmin = await this.prisma.users_room.findFirst({
        where : {
          username : createAdminDto.admin,
          room_name : createAdminDto.room_name,
        }
      });
      if (futurAdmin === null) return (-3);
      
      /* check if the user is admin */
      if(futurAdmin.user_role === "admin")  return (-4);

      return  await this.prisma.users_room.update({
        where : {
            id :futurAdmin.id,
        },
        data : {
          user_role :"admin"
        }
      });
      
   }

   /* ************************************ */

  async leaveOwner(leaveRoomDto : LeaveRoomDto)
  {
      const find = await this.prisma.users_room.findFirst({ 
        orderBy : {user_role : "asc"} ,
          where : {
            room_name : leaveRoomDto.room_name,
            OR : [ {user_role : "admin"} , {user_role : "user"} ]
          }
      }); 

    if (!find)
    {
        return await this.prisma.room.delete({
          where: {
            name : leaveRoomDto.room_name,
          },
      });
    }
    else
    {
        await this.prisma.users_room.delete({
          where : {
              username_room_name :{
                username : leaveRoomDto.username,
                room_name : leaveRoomDto.room_name
              },
          }
        });

        return await this.prisma.users_room.update({
          where : {
            username_room_name : {
              username : find.username,
              room_name : leaveRoomDto.room_name
            }
          },
          data : {
            user_role : "owner",
            room : {
              update : {
                owner : find.username
              }
            }
          },
          include : {room : true},
      });
  }
  }
  /* ************************************ */

   async leave(leaveRoomDto : LeaveRoomDto)
    {
      return await this.prisma.users_room.delete ({
        where : {
            username_room_name :{
              username : leaveRoomDto.username,
              room_name : leaveRoomDto.room_name
            },
        }
      });
    }

    /* ************************************ */

    async leaveRoom(leaveRoomDto : LeaveRoomDto)
    {
      const personToLeave = await  this.prisma.users_room.findFirst({
          where : {
            username : leaveRoomDto.username,
            room_name : leaveRoomDto.room_name,
            user_role : leaveRoomDto.user_role,
          }
      });
      if(personToLeave === null) return (-1);

      if (leaveRoomDto.user_role === "owner")
          return this.leaveOwner(leaveRoomDto);
      else
        return this.leave(leaveRoomDto);

    }
    /* ************************************ */

    async changeVisibility(changeVisibilityDto : changeVisibilityDto)
    {
        const data = await  this.prisma.users_room.findFirst({
          where : {
            username : changeVisibilityDto.owner,
            room_name : changeVisibilityDto.room_name,
            user_role : "owner",
            room : {
              type : changeVisibilityDto.old_type
            }
          },
      });
      if (data == null) return -1;

      if (changeVisibilityDto.new_type === changeVisibilityDto.old_type) return -2;
      if(changeVisibilityDto.new_type === "protected") return -3;


        return await  this.prisma.room.update({
          where :{
            name :  changeVisibilityDto.room_name
          },
          data :{
            type : changeVisibilityDto.new_type
          }
        });
      
    }

    /* ************************************ */

    async changePassword()
    {
    
    }




    /* ************************************ */

    async sendMessage(client : Socket , messageDto : MessageDto)
    {
      let check = false;
        /* check if data is correct */
        if(!(await  this.prisma.users_room.findFirst({
          where : {
            username : messageDto.name,
            room_name : messageDto.room,
          }
        })))
          return -1;

      for (let i = 0 ; i < this.banned.length ; i++)
      {
          if(messageDto.name == this.banned[i])
          {
            check = true;
            break;
          }
      }

      if( check == false)
      {
          const newmsg = await this.prisma.messageRoom.create ({
            data : {
              creationDate : new Date(),
              from : messageDto.name,
              room_name : messageDto.room,
              content_msg : messageDto.message
            }
          })
          return 1;
      }
      return 0;
    }


     /* ************************************ */

     async ban(client : Socket , bannedDto : BannedDto) : Promise<any>
     {
        const usercount = await this.prisma.users_room.count({
          where: {
            username: bannedDto.name,
            room_name : bannedDto.room + 'Banned',
          }
        });
        if(usercount === 0 ) return (null);
  
        await this.prisma.users_room.create({
          data : {
            username: bannedDto.name, 
            user_role: "ban", 
            room_name: bannedDto.room + 'Banned',
            state_user: ""
          }
        });

        for (let [key, value] of this.myMap)
        {
            if(key === bannedDto.name)
            {
              this.banned.push(key);
              return  value;
        }
      }

  }
}
