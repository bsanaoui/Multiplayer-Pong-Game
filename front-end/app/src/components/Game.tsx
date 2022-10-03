import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { finishGame, HandleOpeneDialog, ModeEnum, setModeGame } from '../store/gameReducer'
import Canvas from './canvas'
import ModeDialog from './Game/ModeDialog'
import { ModesInput } from './Game/ModesInput'
import './Game/navGame.css'

const Game = () => {
	const dispatch = useDispatch();
	const isGameSet = useSelector((state: RootState) => state.game).is_game_set;


	useEffect(() => {
		dispatch(HandleOpeneDialog())
	},[])
	
	useEffect(() => {
		return (() => {
			if (isGameSet)
				dispatch(finishGame());
		})
	}, [isGameSet]);

	return (
		<Box sx={{ width: "100%", height: "100%", margin: "auto" }} >
			<ModeDialog>
				<ModesInput watch={false} />
			</ModeDialog>
			{isGameSet && <Canvas />}
		</Box>
	)
}

export default Game