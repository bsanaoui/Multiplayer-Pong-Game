import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async signup(){
        let userCount = await this.prisma.user.count(
            {
                where: {
                    token_42_api: 'token42tfghfghgfhgfhfghghFFDFD'
                }
            }
        )
        //try{    
            // save the new user in the db
        if (userCount === 0)
        {
            const newuser = await this.prisma.user.create({
                data: {
                    token_42_api: 'token42tfghfghgfhgfhfghghFFDFD',
                    username: 'Soukaina',
                    avatar: 'ava',
                    email: 'ssghuri@student.1337.ma',
                    phone: 2445144,
                    losses: 0,
                    wins: 0,
                    ladder_level:0,
                },
            });
            console.log(newuser);
            console.log('I have signed up');
        }
        else{
            console.log('already exists');
        }
           
        
        let userCount1 = await this.prisma.user.count(
            {
                where: {
                    token_42_api: 'token4244444444444'
                }
            }
        )
        //try{    
            // save the new user in the db
        if (userCount1 === 0)
        {
            const newuser1 = await this.prisma.user.create({
                data: {
                    token_42_api: 'token4244444444444',
                    username: 'Hamza',
                    avatar: 'ava',
                    email: 'hchorfi@student.1337.ma',
                    phone: 25544,
                    losses: 0,
                    wins: 0,
                    ladder_level:0,
                },
            });
            console.log(newuser1);
            console.log('I have signed up');
        }


        let userCount2 = await this.prisma.user.count(
            {
                where: {
                    token_42_api: 'token333'
                }
            }
        )
        if (userCount2 === 0)
        {
            const newuser2 = await this.prisma.user.create({
                data: {
                    token_42_api: 'token333',
                    username: 'Safa',
                    avatar: 'ava',
                    email: 'sbarka@student.1337.ma',
                    phone: 255442,
                    losses: 0,
                    wins: 0,
                    ladder_level:0,
                },
            });
            console.log(newuser2);
            console.log('I have signed up');
        }
        else{
            console.log('already exists');
        }
        let userCount5 = await this.prisma.user.count(
            {
                where: {
                    token_42_api: 'token42tf'
                }
            }
        )
        //try{    
            // save the new user in the db
        if (userCount5 === 0)
        {
            const newuser = await this.prisma.user.create({
                data: {
                    token_42_api: 'token42tf',
                    username: 'Brahim',
                    avatar: 'ava',
                    email: 'brahim@student.1337.ma',
                    phone: 2445144,
                    losses: 0,
                    wins: 0,
                    ladder_level:0,
                },
            });
            console.log(newuser);
            console.log('I have signed up');
        }
        else{
            console.log('already exists');
        }
        // } catch(error){
        //     // if (error instanceof PrismaClientUnknownRequestError){
        //     //     if (error.name === 'ExceptionsHandler'){
        //     //         throw new ForbiddenException('Credentials taken')
        //     //     }
        //     // }
        //     throw error;
        // }
    }
}
