import { Body, Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { dm_msg } from 'src/dto_msg_room/dm_msg';
import { PrismaService } from 'src/prisma/prisma.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  }
})
export class DmGateway {
  constructor(private prisma: PrismaService){}


  @WebSocketServer()
    server: Server;
    private logger: Logger = new Logger('AppGateway_DM');

  @SubscribeMessage('message')
  handleMessage() {
    console.log("hello world1!!!!");
    //return 'Hello world!';
  }

  @SubscribeMessage('check_room')
    async check_room_name(client: Socket,message: dm_msg){
      let get_name;
      const dm_name = await this.prisma.room.count({
        where:{
          OR: [
            {
              name: message.from + message.to,
            },
            {
              name: message.to + message.from,
            },
          ]
        }
      })
      if (dm_name == 1){
        get_name = await this.prisma.room.findFirst({
          where:{
            OR: [
              {
                name: message.from + message.to,
              },
              {
                name: message.to + message.from,
              },
            ]
          },
          select:{
            name: true,
          }
        })
      
      }
      if (dm_name == 0){
        const add_dm_room = await this.prisma.room.create({
          data: {
            name: message.from + message.to, type: 'dm', password: '', owner: message.from,
          }
        })
      }
      client.join(get_name.name);
      this.server.to(get_name.name).emit("hello");
      
      
    }

    @SubscribeMessage('dm_message')
    async send_msg(client: Socket, @Body()message: dm_msg){
      let get_name;
      get_name = await this.prisma.room.findFirst({
        where:{
          OR: [
            {
              name: message.from + message.to,
            },
            {
              name: message.to + message.from,
            },
          ]
        },
        select:{
          name: true,
        }
      })
      this.server.to(get_name.name).emit('msgToClient_dm', message);
      const newmsg = await this.prisma.directMessage.create({
        data:
          {creationDate: new Date(), from: message.from, to: message.to, content_msg: message.msg},
        });
    }

    handleDisconnect(client: Socket) {
    	this.logger.log(`Client disconnected: ${client.id}`);
    }
  
    handleConnection(client: Socket) {
    	this.logger.log(`Client connected: ${client.id}`);
    }
}
