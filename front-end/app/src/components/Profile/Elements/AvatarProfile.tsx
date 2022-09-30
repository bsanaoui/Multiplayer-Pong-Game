import { Box, Avatar } from '@mui/material'
import avatar2 from '../../../assets/man.png'

const AvatarProfile = (props:{avatar: string}) => {
	return (
		<Box>
			<Avatar
				variant="square"
				sx={{
					height: '110px',
					width: '110px',
					backgroundColor: "#FFF",
					padding: "7px",
					border: "6px solid #535995",
					borderRadius: "30px",
				}}
			// alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' } }} />
			alt="Lion" src={props.avatar} imgProps={{ style: { width: 'auto' } }} />
		</Box>
	)
}

export default AvatarProfile