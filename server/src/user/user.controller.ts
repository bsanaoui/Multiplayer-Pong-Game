import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get('/createuser')
    signup(){
        let users = [
            {id: 10,
            username: 'Soukaina'
            },
            {
                id: 1,
                username: 'Hamza'
            }
        ];
        //return this.userService.signup();
        return users;
    }
    @Get('/posteuser')
    postsignup(){
        //let user = data.user;
       // const {id , user} = data;
        // console.log(data);
        return this.userService.signup();
        //return data;
    }
}
