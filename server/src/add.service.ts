import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';
import { create_dto_msg } from './dto_msg_room/create-msg-room';

@Injectable()
export class ChatService {
    // async handleMessage(client: Socket, createdtomsgroom: create_dto_msg) {
    //     let userCount = await this.prisma.user.count(
    //     {
    //         where: {
    //             username: createdtomsgroom.name,
    //         }
    //     })
    //     console.log(createdtomsgroom.name);   
    //     if (userCount == 1){
    //         const newmsg = await this.prisma.messageRoom.create({
    //         data:
    //         {creationDate: new Date(), from: createdtomsgroom.name, room_name: "room", content_msg: createdtomsgroom.text},
    //         });
    //     }
    //     else{
    //         //console.log('not found');
    //         return new HttpException('User not found', HttpStatus.NOT_FOUND) 
    //     }
    // }
}