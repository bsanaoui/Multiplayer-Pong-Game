import { Box, Stack, Typography } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

interface PropsUserType {
	login:string,
	username:string,
	level:number,
}

const UserNameElement = (Props:PropsUserType) => {
	return (
		<Box
			sx={{
				width: "240px",
				height: "79px",
			}}>
			<Stack
				spacing={1}
				justifyContent="space-between"
				alignItems="flex-start">
				<Typography
					fontFamily="Lato"
					fontWeight='800'
					fontSize='2.2rem'
					lineHeight='109.52%'>
					{/* Jack Linsan */}
					{Props.username}
				</Typography>
				<Stack direction= "row" justifyContent="space-between" alignItems="center" spacing={3}>
					<Typography
						fontFamily="Lato"
						fontWeight='800'
						fontSize='1.2rem'
						color="#A9AEE3">
						{/* JackL */}
						{Props.login}
					</Typography>
					<Stack direction="row" spacing={0.5}>
						<SportsEsportsIcon sx={{ width: "19px" }} />
						<Typography
							sx={{
								color: '#ADADAD',
								fontWeight: '600',
								fontSize: '0.9rem',
								paddingTop: '1.3px',
							}}>
							{/* Level 23</Typography> */}
							Level {Props.level}</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Box >
	)
}

export default UserNameElement 