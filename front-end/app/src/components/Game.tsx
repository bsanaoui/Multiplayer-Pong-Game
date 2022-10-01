import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Canvas from './canvas'
import ModeDialog from './Game/ModeDialog'
import { ModesInput } from './Game/ModesInput'

const Game = () => {
	const isGameSet = useSelector((state: RootState) => state.game).is_game_set;

	return (
		<Box>
			<ModeDialog>
				<ModesInput watch={false} />
			</ModeDialog>
			{isGameSet && <Canvas />}
		</Box>
	)
}

export default Game