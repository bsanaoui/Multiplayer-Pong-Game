import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import roomIcon from '../assets/chat-room.png'
import RoomButtonChat from './RoomButtonChat';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initSocketClient, disconnectSocket } from "../store/socketReducer";
import { RootState } from '../store';


// function pickRandom() {
//     const names: string[] = ["JoinRoom1", "JoinRoom2", "JoinRoom3",
//         "JoinRoom4", "JoinRoom5"];
//     return names[Math.floor(Math.random() * names.length)];
// }

// const rooms = Array.from({ length: 5 }, (_, index) => {
//     return (
//         <li key={index} className='item-friend'>
//             <RoomButtonChat name={pickRandom()} />
//         </li>
//     );
// });

const Rooms = () => {
	const logged_user = useSelector((state: RootState) => state.user).login;
	const currentRoom = useSelector((state: RootState) => state.chat).curr_room;

	const dispatch = useDispatch();

	useEffect(() => {

		if (currentRoom && logged_user) {
			dispatch(initSocketClient({
				host: process.env.REACT_APP_SERVER_IP as string, auth: {
					auth: {
						room: currentRoom,
						user: logged_user,
					}
				}
			}));

		}
		return () => {
			dispatch(disconnectSocket());
		}
	})

	return (
		<Box
			sx={{
				backgroundColor: "#202541",
				// width: "500px",
				height: '100vh',
				padding: '30px'

			}}>
			<Stack height="100%">
				<Stack spacing={1} direction="row">
					<IconButton>
						<img src={roomIcon} width="36px" alt='roomIcon' />
					</IconButton>
					<div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
						<Typography sx={{
							fontWeight: '700',
							fontSize: '28px',
							lineHeight: '109.52%',

						}}>
							Chat Room
						</Typography>
					</div>
				</Stack>
				<Stack spacing={3} direction="row" margin="40px 35px 20px 9px">
					<Typography sx={{
						fontWeight: '600',
						fontSize: '22px',
						lineHeight: '109.52%',

					}}>
						Rooms
					</Typography>
					<div className='dot-nb center-button'>
						8
					</div>
					<div style={{
						marginLeft: "auto",
					}}>
						<Typography sx={{
							fontWeight: '400',
							fontSize: '14px',
							lineHeight: '109.52%',
							textDecorationLine: 'underline',
							marginTop: "3%"
						}}>
							Create new room
						</Typography>
					</div>
				</Stack>
				<List style={{ overflow: 'auto', height: "100%" }} >
					{/* {rooms} */}
					<li key='1' className='item-friend'>
						<RoomButtonChat name='filles' />
					</li>
					<li key='2' className='item-friend'>
						<RoomButtonChat name='room1' />
					</li>
				</List>
			</Stack>
		</Box>
	)
}

export default Rooms