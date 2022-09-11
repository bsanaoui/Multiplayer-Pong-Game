import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
/* When setting up your NestJS application, you'll want to abstract away the Prisma Client API for database queries within a service */
/* create a new PrismaService that takes care of instantiating PrismaClient and connecting to your database */
export class PrismaService extends PrismaClient implements OnModuleDestroy , OnModuleInit {

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async onModuleInit() {
    await this.$connect()
  }
}
