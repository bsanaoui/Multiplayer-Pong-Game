import { Body, Logger } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, WsException } from '@nestjs/websockets';

import { Server, Socket } from "socket.io";
import { ChatService } from './chat.service';
import { BannedDto, changeVisibilityDto, CreateAdminDto, JoinRoomDto,  LeaveRoomDto, MessageDto } from './dto/chat.dto';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  private logger: Logger = new Logger('CHAT');
  @WebSocketServer()
  server : Server


  /* ************************************ */


  @SubscribeMessage('joinRoom')
  async joinRoom(client : Socket , joinRoomDto : JoinRoomDto)
  {
      const ret = await this.chatService.joinRoom(client , joinRoomDto);
      client.join(joinRoomDto.room);
      this.server.to(joinRoomDto.room).emit("joined" , ret);
  }


  /* ************************************ */

  @SubscribeMessage('setAdmin')
  async setAdmin(client :Socket , createAdminDto : CreateAdminDto){

    const ret = await this.chatService.setAdmin(createAdminDto);
    if      ( ret === -1)     throw   new WsException(`${createAdminDto.username} is not  owner of ${createAdminDto.room_name}`);                                           
    else if (ret === -2)      throw   new WsException(`${createAdminDto.username} is owner of ${createAdminDto.room_name}`);                            
    else if (ret === -3 )     throw new WsException(`${createAdminDto.admin} not joining ${createAdminDto.room_name}`)  
    else if (ret === -4)      throw  new WsException(`${createAdminDto.admin} is already an admin in ${createAdminDto.room_name}`);
    return this.server.to(createAdminDto.room_name).emit("setAdmin" , ret);
  
  }

  /* ************************************ */
  @SubscribeMessage('leaveRoom')
  async leaveRoom(client: Socket,leaveRoomDto : LeaveRoomDto){
      const ret = await this.chatService.leaveRoom(leaveRoomDto);
      if (ret === -1)  throw new WsException(`the data  [ ${leaveRoomDto.username} , ${leaveRoomDto.user_role} , ${leaveRoomDto.room_name} ] is incorrect`)
      return this.server.to(leaveRoomDto.room_name).emit("leaveRoom" , {"status" : true , "message" : `${leaveRoomDto.username} left room successfully` , object : ret})
 
  }
  /* ************************************ */

  @SubscribeMessage('sendMessage')
  async sendMessage(client : Socket , messageDto : MessageDto)
  {
      const ret = await this.chatService.sendMessage(client , messageDto);
      if(ret === -1) throw   new WsException(`the data  [ ${messageDto.name} , ${messageDto.room} ] is incorrect`);
      else if(ret === 1 ) this.server.to(messageDto.room).except(messageDto.room + 'Banned').emit('msgToClient', messageDto);


  }
  /* ************************************ */
  @SubscribeMessage('banned')
  async banned(client : Socket , bannedDto : BannedDto)
  {
    const ret = await this.chatService.ban(client, bannedDto);
  
        var socket : string;
        socket  = ret;
        this.server.sockets.sockets.get(ret).join(bannedDto.room + "Banned");
        this.server.sockets.sockets.get(ret).leave(bannedDto.room);
        this.server.to(bannedDto.room).except(bannedDto.room + 'Banned').emit('banned',{"message" : `${bannedDto.name} banned from room  ${bannedDto.room} successfully` , "object" : ret});
      
  }
  /* ************************************ */
  @SubscribeMessage('changeVisibility')
  async changeVisibility(client: Socket, changeVisibilityDto : changeVisibilityDto)
  {

    const ret = await this.chatService.changeVisibility(changeVisibilityDto);
    if (ret === -1 ) throw new WsException(`the data  [ ${changeVisibilityDto.room_name} , ${changeVisibilityDto.old_type} , ${changeVisibilityDto.owner} is incorrect`);  
    if(ret === -3)  throw new WsException(`use set password option`);
    else 
      this.server.to(changeVisibilityDto.room_name).except(changeVisibilityDto.room_name + 'Banned').emit('changeVisibility', {"status" : true , "message" : `visibility is changed` , object : ret});
  }

  /* ************************************ */
  @SubscribeMessage('changePassword')
  async changePassword(client: Socket)
  {
    const ret = await this.chatService.changePassword();
  }

  /* ************************************ */
handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
}

handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);

    /* everytime a socket is connected , the current user must be bind to it */

                // /* client.data.user = userInfo */
}

}