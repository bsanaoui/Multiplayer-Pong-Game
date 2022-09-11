import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoomModule } from './room/room.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [UsersModule, PrismaModule, RoomModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
