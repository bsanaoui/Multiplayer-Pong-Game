import { Box, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import groupIcon from '../assets/group-icon.svg'
import { JoinRoomPost, RoomData } from '../requests/home'
import { changeCurrRoom } from '../store/chatUiReducer'
import { InterfaceEnum, setCurrentInterface } from '../store/interfacesReducer'
import { handleToastMsg } from './InfoMessages/Toast'


const RoomButton = (Props: RoomData) => {
	const navigate = useNavigate();

	return (
		<Box
			onClick={() => {
				JoinRoomPost(Props.room_id).then((value) => {
					const data: { room_id: string } = value as { room_id: string };
					if (data && data.room_id !== '')
						handleToastMsg(true, `You are now user at ${data.room_id}`);
					else
						handleToastMsg(false, `You already user at ${Props.room_id}`);
				}).catch((error: any) => {
					console.log("Error ;matchs:", error);
					navigate(error.redirectTo);
				})

			}}
			sx={{
				width: '320px',
				height: '210px',
				boxSizing: 'border-box',
				background: 'linear-gradient(110.14deg, #355B88 27.7%, #341760 83.08%)',
				border: '2px solid #FFFFFF',
				borderRadius: '27px',
				cursor: "pointer",
			}}>
			<Box
				sx={{
					margin: '15px 20px'
				}}>
				<div className='room-title center-text center-button' style={{ padding: '0 15px' }}>
					{Props.room_id}
				</div>
			</Box>

			<Stack
				direction="row"
				spacing={1}
				sx={{
					margin: '23px 23px 0px',
				}}>
				<Box>
					<div className='dot center-text center-button' style={{ marginLeft: '5px' }}>
						{Props.owner.charAt(0)}
					</div>
					<Typography
						sx={{
							fontWeight: '300px'
						}}>
						{Props.owner}
					</Typography>
				</Box>
				<Box>
					<div className='dot-dotted' />
				</Box>
			</Stack>
			<Stack
				direction="row"
				spacing={2}
				sx={{
					marginLeft: '25px',
					marginTop: '10px'
				}}>
				<img src={groupIcon} alt="room users" style={{ height: 34, marginTop: 14 }} />
				<div style={{ fontSize: '44px', fontWeight: 550 }}>
					{Props.count}
				</div>
			</Stack>
		</Box>
	)
}

export default RoomButton