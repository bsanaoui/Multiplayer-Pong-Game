import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import avatar2 from '../assets/avatar2.png'
import DropMenu from './DropMenus/DropMenuRoom';
import { UserOfRoom } from '../store/roomUsersReducer';


export const UserButton = (Props:UserOfRoom) => {

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
							alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' } }} />
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
						}}>{Props.username}</Typography>
				</Box>
				<div style={{ marginLeft: 'auto' }}>
					<DropMenu />
				</div>
			</Stack>
		</Box >
	)
}