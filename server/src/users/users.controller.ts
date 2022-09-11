import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AddUserRoomDto } from './dto/addUser-room.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/createUser')

  async createUser(@Body() createUserDto : CreateUserDto )//, @Res() response : Response) // if we don't send the response directly , we don't need to use it 
  {
     const new_user = await this.usersService.createUser(createUserDto);
     if (new_user)
          /* without interacting with the Response object we can simply send  the object  created */ 
          return new_user ;
     else
          /* if we don't  want to interact with Response object directly , we can send an 
          exception , it will send a response back to the user without actually using the response 
          object itself */
          throw new HttpException('user already exist!!' ,HttpStatus.CONFLICT);

     // if(new_user)
     //      response.send(new_user)
     // else
     //      response.status(HttpStatus.CONFLICT).send({ 
     //           message :"user already exist with that name"});

  }


  @Get('/getUsers')
  async getUsers()
  {
     return this.usersService.getUsers();
  }

  @Post('/addUserToRoom')
  async addUserToRoom(@Body() addUserToRoom : AddUserRoomDto)
  {
     return await this.usersService.addUserToRoom(addUserToRoom);
  }

}
