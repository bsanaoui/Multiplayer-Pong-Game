import { Box, Stack, Typography } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export interface PlayerTableProps {
	username: string,
	level: number,
}

const PlayerTable = (Props: PlayerTableProps) => {
	return (
		<Box
			sx={{
				alignItems:"center",
				marginTop:"23px",
				width: '130px',
				height: '60px',
			}}>
			<Typography
				className='truncate-typo'
				width='100%'
				textAlign="center"
				fontWeight='500'
				fontSize='1.3rem'>
				{Props.username}
			</Typography>
			{/* <Stack direction="row" alignItems="center" spacing={0}>
				<Typography
					className='truncate-typo'
					width='100%'
					textAlign="center"
					fontWeight='500'
					fontSize='1.3rem'>
					{Props.username}
				</Typography>
				<SportsEsportsIcon sx={{ width: "20px" }} />
				<Stack direction="row" spacing={0.5}>
					<SportsEsportsIcon sx={{ width: "19px" }} />
					<Typography
						sx={{
							color: '#ADADAD',
							fontWeight: '500',
							fontSize: '0.9rem',
							paddingTop: '1.3px',
						}}>
						Level {Props.level}</Typography>
				</Stack> 
			</Stack> */}
		</Box>
	)
}

export default PlayerTable