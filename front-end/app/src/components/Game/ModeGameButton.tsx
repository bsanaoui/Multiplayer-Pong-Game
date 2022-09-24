import { Avatar, Box, Typography } from '@mui/material'
import { relative } from 'path'
import classicImage from '../../assets/Game/classic.png'
import RetroImage from '../../assets/Game/RetroMode.png'
interface modeGameProps {
	mode: string,
	watch: boolean,
}

export const ModeGameButton = ({ mode, watch }: modeGameProps) => {
	const colorBg = (mode === '2') ? "linear-gradient(to right bottom, #673AB7, #512DA8 )" 
	: "linear-gradient(to right bottom, #56ab2f, #a8e063 )";

	return (
		<Box sx={{
			width: "210px",
			height: "200px",
			backgroundImage: colorBg,
			borderRadius: '24px',
			position: 'relative',
		}}>
			{mode === '2' && <Avatar src={classicImage} sx={{width:"170px", height:"170px", margin:'auto', marginLeft:'8%'}}/>}
			{mode === '1'&&
			<Box sx={{paddingTop:"5px"}}>
				<Avatar src={RetroImage} sx={{ width: "135px", height: "135px", margin:'auto', marginTop:'6%'}} />
			</Box>}
			<Typography sx={{
				position: 'absolute',
				bottom: 10,
				left: 14,
				fontSize: "1.19rem",
				fontWeight: "800",
				fontStyle: "italic",
				textShadow: "1px 2px #000"
			}}>
				{mode === '1' && "MODE CLASSIC"}
				{mode === '2' && "MODE RETRO"}
			</Typography>
		</Box>
	)
}
