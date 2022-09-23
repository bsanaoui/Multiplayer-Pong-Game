import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import { Socket } from 'socket.io-client';
import { Friend } from '../requests/directMessage';
import DropMenuUser from './DropMenus/DropMenuUser';


export const FriendButton = (props:{friend:Friend, socket:Socket}) => {

	return (
		<Box
			sx={{
				background: 'linear-gradient(to bottom right, #2E2256, #4289F3)',
				minWidth: '290px',
				width: '290px',
				height: '55px',
				borderRadius: '12px',
				position: 'relative',

			}}>
			<Stack spacing={2} direction="row" padding='3% 3%'
			>
				<div>
					<Badge
						overlap="circular"
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						badgeContent={
							<div style={{ backgroundColor: '#3FFC10' }} className="dot_status" />
						}
					>
						<Avatar
							sx={{
								height: '36px',
								width: '37px',
								backgroundColor: "#FFF",
								padding: "3px",
							}}
							alt={props.friend.login} src={props.friend.avatar} imgProps={{ style: { width: 'auto' } }} />
					</Badge>
				</div>
				<Box
				>
					<Typography
						sx={{
							fontFamily: 'Lexend',
							fontWeight: '500',
							fontSize: '1.15rem',
							fontStyle: 'normal',
							margin: '5.2% auto'
						}}>{props.friend.username}</Typography>
				</Box>
				<div style={{ marginLeft: 'auto' }}>
					<DropMenuUser is_dm_user={false} friend={props.friend} socket={props.socket}/>
				</div>
			</Stack>
		</Box >
	)
}