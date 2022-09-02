import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AppGateway } from './app.gateway';
// import { AppGateway } from './chat-service/app.gateway';
import { ChatModule } from './chat/chat.module';
import { RoomService } from './room/room.service';
import { ChatService } from './add.service';
import { DmGateway } from './DM/dm.gateway';

@Module({
  imports: [RoomModule, PrismaModule, UserModule, ChatModule],
  // controllers: [AppController],
  // providers: [AppService],
  providers: [AppGateway, RoomService, ChatService, DmGateway],
})
export class AppModule {}