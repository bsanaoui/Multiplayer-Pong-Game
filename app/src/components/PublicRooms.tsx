import { Box, Paper, Stack, Typography } from '@mui/material'
import RoomButton from './RoomButton'
import reloadIcon from '../assets/reload-icon.png'


const rooms = Array.from({ length: 6 }, (_, index) => {
	return (
		<div className="item">
			<RoomButton />
		</div>
	);
});

interface RoomProps {
	kind: string
  }

const PublicRooms = ({kind}:RoomProps) => {
	return (
		<Stack
			spacing={2}
			sx={{
				width: '100%',
				marginLeft: '50px'
			}}>
			<Stack
				spacing={2}
				direction='row'>
				<Typography
					sx={{
						fontWeight: 'bold',
						fontSize: '2rem',
						lineHeight: ' 35.05px',
						align: 'center',
					}}>
					{kind}</Typography>
				<img src={reloadIcon} style={{ width: 35 }} />
			</Stack>
			<div className="horizontal_slider">
				<div className="slider_container">
					{rooms}
				</div>
			</div>
		</Stack>
	)
}

export default PublicRooms