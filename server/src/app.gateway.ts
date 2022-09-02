import { 
		OnGatewayConnection, 
		OnGatewayDisconnect, 
		OnGatewayInit, 
		SubscribeMessage, 
		WebSocketGateway, 
		WebSocketServer 
	} from "@nestjs/websockets";
	import { Body, Get, HttpException, HttpStatus, Logger, Post } from "@nestjs/common";
	import { Server, Socket } from "socket.io";
	import { PrismaService } from 'src/prisma/prisma.service';
	import { create_dto_msg, dto_user_room } from "./dto_msg_room/create-msg-room";
	import { dm_msg } from "./dto_msg_room/dm_msg";

	@WebSocketGateway({
	// namespace: 'chat',
	cors: {
		origin: '*',
	}
	})

export class AppGateway {
    
    constructor(private prisma: PrismaService){}
    myMap = new Map([]);

    @WebSocketServer()
    server: Server;
    private logger: Logger = new Logger('AppGateway');

    @SubscribeMessage('hello')
    hello()
    {
      console.log("hello world");
      //this.server.emit('msgToClient', message);
    }

    // @SubscribeMessage('msgToServer')
    // async handleMessage(client: Socket, createdtomsgroom: create_dto_msg) {
    //   this.server.emit('msgToClient', createdtomsgroom);
    //   const userCount = await this.prisma.user.count(
    //     {
    //         where: {
    //             username: createdtomsgroom.name,
    //         }
    //     })
    //   console.log(createdtomsgroom.name);   
    //   if (userCount == 1){
    //     const newmsg = await this.prisma.messageRoom.create({
    //     data:
    //       {creationDate: new Date(), from: createdtomsgroom.name, room_name: "room_server", content_msg: createdtomsgroom.text},
    //     });
    //   }
    //   else{
    //     //console.log('not found');
    //     return new HttpException('User not found', HttpStatus.NOT_FOUND) 
    //   }
    // }
    afterInit(server: Server) {
      this.logger.log('Init');
    }

    @SubscribeMessage('JoinRoom')
    async step1Tojoinroom(client: Socket, infos: dto_user_room){
    console.log(infos);
		client.join(infos.room);
		// this.server.to(infos.room).emit("hello");
		// this.myMap.set(infos.name, client.id);
		const usercount = await this.prisma.users_room.count({
      where: {
        user_id: infos.name,
        room_id: infos.room,
      }
      })
      if (usercount == 0){
        const newUserRoom = await this.prisma.users_room.create({
        data:
          {user_id: infos.name, user_role: "user", room_id: infos.room, state_user: ""},
      });
		  }
      else{
        return new HttpException('User already exist in room', HttpStatus.FOUND) 
      }
		// console.log(this.myMap);
    }

    @SubscribeMessage('SendMessageRoom')
    async join_room(client: Socket, infos: dto_user_room){
      // client.data.username = "Soukaina";

      //this.server.to("room").emit('msgToClient', createdtomsgroom);
      // for (let [key, value] of this.myMap) {
      //   if (key === "Hamza")
      //   {
      //     var soketId;
      //     soketId = value;
      //     this.server.except([soketId]).to("room1").emit('msgToClient', message);
      //     console.log('*****', soketId);
      //   }              
      // }
      this.server.to(infos.room).emit('msgToClient', infos);

      const userCount = await this.prisma.user.count(
      {
          where: {
              username: infos.name,
          }
      })  
      if (userCount == 1){
        const newmsg = await this.prisma.messageRoom.create({
        data:
          {creationDate: new Date(), from: infos.name, room_name: infos.room, content_msg: infos.message},
        });
      }
      else{
        return new HttpException('User not found', HttpStatus.NOT_FOUND) 
      }
    }
  
    handleDisconnect(client: Socket) {
    	this.logger.log(`Client disconnected: ${client.id}`);
    }
  
    handleConnection(client: Socket) {
    	this.logger.log(`Client connected: ${client.id}`);
    }

    
  }