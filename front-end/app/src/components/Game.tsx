import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { RootState } from '../store'
import { finishGame, HandleOpeneDialog, ModeEnum, setModeGame, startInviteGame } from '../store/gameReducer'
import Canvas from './canvas'
import ModeDialog from './Game/ModeDialog'
import { ModesInput } from './Game/ModesInput'
import './Game/navGame.css'
import PlayButton from './Game/PlayButton'


const Game = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const isGameSet = useSelector((state: RootState) => state.game).is_game_set;
	const mode: string = searchParams.get('mode')as string;
	const invite: string = searchParams.get('key') as string;

	const navigate = useNavigate();

	useEffect(() => {
		// console.log("mode :", mode);
		// console.log("invitekey :", invite);

		if (location.pathname === '/matchmaking' && !mode && !invite)
			dispatch(HandleOpeneDialog());
		else
			dispatch(startInviteGame());
		return (() => {
			// if (isGameSet)
			console.log("finish");
			dispatch(finishGame());
			navigate(0);
		})
	}, [])

	return (
		<Box sx={{ width: "100%", height: "100%", margin: "auto" }} >
			{/* {!isGameSet && <PlayButton>} */}
			<ModeDialog>
				<ModesInput watch={false} />
			</ModeDialog>
			{isGameSet && <Canvas />}
		</Box>
	)
}

export default Game