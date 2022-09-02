import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { add_user_room_dto } from './dto/add_user_room.dto';
import { createRoomDto, dm_room, room_name } from './dto/create-room.dto';

@Injectable()
export class RoomService {
   constructor(private prisma: PrismaService){}

	async find_room(){
		const newRoom = await this.prisma.room.findMany({
			//include: { user: true },
		});
		console.log(newRoom);
	}

	async create_post_room(createRoomDto: createRoomDto){
		//console.log(createRoomDto);
		const hash = await argon.hash(createRoomDto.password);
		const name = createRoomDto.name;
		const userCount = await this.prisma.user.count(
            {
                where: {
                    username: createRoomDto.owner
                }
            }
        )
		const identif = await this.prisma.room.count(
			{
				where: {
					name: createRoomDto.name,
					owner: createRoomDto.owner
				}
			}
		)
		if (userCount == 1 && identif == 0)
		{
			const newroom = {
				name: createRoomDto.name,
				type: createRoomDto.type,
				password: hash,
				owner: createRoomDto.owner,
				users_room : {
					create: {
						user_id : createRoomDto.owner,
						user_role: 'owner',
						state_user: '',
					}
				}
			}
			const new_user_room = await this.prisma.room.create({data: newroom});
			return (new_user_room);
		}
		else {
			return new HttpException('Already exist', HttpStatus.FOUND);
		}
	}

	async get_rooms()
	{
		const getrooms = await this.prisma.room.findMany({
			select: {
				name: true,
				owner: true,
			}
		})
		return (getrooms);
	}

	async get_public_room(){
		const getinfo = await this.prisma.room.findMany({
			where: {
				type: 'public',
			},
			select: {
				_count: {
					select:{
						users_room: true,
					}
				},
				name : true,
				owner: true,
				type : false,
				password : false,
			},
		})

		console.log(getinfo);
		return (getinfo);
	}

	async get_protected_room(){
		const getinfo = await this.prisma.room.findMany({
			where: {
				type: 'protected',
			},
			select: {
				_count: {
					select:{
						users_room: true,
					}
				},
				name : true,
				owner: true,
				type : false,
				password : false,
			},
		})

		console.log(getinfo);
		return (getinfo);
	}

	async get_count_user()
	{
		const count_user = await this.prisma.users_room.count({
			where : {
				room_id: 'room1',
			},
		})
		console.log(count_user);
		return (count_user);
	}

	async add_user_room(addUserRoom: add_user_room_dto)
	{
		const add_user = await this.prisma.users_room.create ({
			data:{
				user_id: addUserRoom.user_id,
				user_role : addUserRoom.user_role,
				room_id: addUserRoom.room_id,
				state_user: addUserRoom.state_user,
			}
		});
		return (add_user);
	}

	// async get_msg_room(name: string){
	// 	const msgs = await this.prisma.messageRoom.findMany({
	// 		where: { room_name: name },
	// 		// select:
	// 		// {
	// 		// 	room_name: false,
	// 		// 	id: false,
	// 		// }
			
	// 	});
	// 	return (msgs);
	// }

	async post_name_room(name: room_name){
		const msgs = await this.prisma.messageRoom.findMany({
			where: { room_name: name.name },
			select:
			{
				from: true,
				content_msg: true,
				room_name: false,
				id: false,
				creationDate: false
			}
			
		});
		return (msgs);
	}

	async post_name_dm(name: dm_room){
		const msgs = await this.prisma.directMessage.findMany({
			where: { 
			
				OR: [
					{
						from: name.from, to: name.to,
					},
					{
						from: name.to, to: name.from
					},
				  ]
			},
			select:
			{
				from: true,
				to: true,
				content_msg: true,
				id: false,
				creationDate: false
			}
			
		});
		return (msgs);
	}

	async ban_user()
	{
		const user_id = await this.prisma.users_room.findFirst({
			where:{
				user_id: "Hamza",
			},
		})
		const ban = await this.prisma.users_room.update({
			where: {
				id: user_id.id,
			  },
			  data: {
				state_user: "baned",
			  },
		});
		return (ban);
	}
}
