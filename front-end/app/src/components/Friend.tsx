import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import avatar2 from '../assets/avatar2.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { changeCurrConversation } from "../store/chatUiReducer";
import DropMenu from './DropMenu';


interface FriendProps {
	name: string
}

const Friend = ({ name }: FriendProps) => {
	const currentConver = useSelector((state: RootState) => state.chat).curr_converation;
	const dispatch = useDispatch();

	let backgroundButton: string = currentConver !== name ? "#2E3256" : "#4289F3";
	return (
		<Box
			onClick={() => { dispatch(changeCurrConversation(name)) }}
			sx={{
				backgroundColor: backgroundButton,
				minWidth: '290px',
				width: '290px',
				height: '55px',
				borderRadius: '12px',
				position: 'relative',
				cursor: 'pointer',

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
							margin: '3% auto'
						}}>{name}</Typography>
				</Box>
				<div style={{ marginLeft: 'auto' }}>
					<DropMenu />
				</div>
			</Stack>
		</Box >
	)
}



export default Friend