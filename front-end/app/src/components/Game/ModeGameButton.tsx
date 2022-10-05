import { Avatar, Box, Typography } from '@mui/material'
import { relative } from 'path'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classicImage from '../../assets/Game/classic.png'
import RetroImage from '../../assets/Game/RetroMode.png'
import { HandleCloseDialog, ModeEnum, setModeGame } from '../../store/gameReducer'
interface modeGameProps {
	mode: string,
	watch: boolean,
}

export const ModeGameButton = ({ mode, watch }: modeGameProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const colorBg = (mode === '1') ? "linear-gradient(to right bottom, #673AB7, #512DA8 )"
		: "linear-gradient(to right bottom, #000046, #1CB5E0 )";

	const handleNavigate = (mode: string) => {
		navigate({
			pathname: '/matchmaking',
			search: '?mode=' + mode,
		});
	}

	return (
		<Box
			// onClick={() => { dispatch((mode === '1') ? setModeGame({ mode: ModeEnum.mode1 }) : setModeGame({ mode: ModeEnum.mode2 })) }}
			onClick={() => { ((mode === '1') ? handleNavigate('1') : handleNavigate('2')); dispatch(HandleCloseDialog()) }}
			sx={{
				width: "210px",
				height: "200px",
				backgroundImage: colorBg,
				borderRadius: '24px',
				position: 'relative',
				cursor: 'pointer',
				'&:hover': {
					backgroundColor: 'primary.main',
					opacity: [0.9, 0.8, 0.7],
				},
			}}>
			{mode === '1' && <Avatar src={classicImage} sx={{ width: "160px", height: "160px", margin: 'auto', marginLeft: '10%' }} />}
			{mode === '2' &&
				<Box sx={{ paddingTop: "5px" }}>
					<Avatar src={RetroImage} sx={{ width: "125px", height: "125px", margin: 'auto', marginTop: '8%' }} />
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
				{mode === '2' && "MODE RUSH"}
			</Typography>
		</Box>
	)
}
