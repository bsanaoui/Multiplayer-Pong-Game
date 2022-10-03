import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { HandleOpeneDialog } from '../store/gameReducer'
import Canvas from './canvas'
import ModeDialog from './Game/ModeDialog'
import { ModesInput } from './Game/ModesInput'
import './Game/navGame.css'

const Game = () => {
	const dispatch = useDispatch();
	const isGameSet = useSelector((state: RootState) => state.game).is_game_set;


	useEffect(() => {

	}, []);

	///// debug Mode Game
	return (
		<Box sx={{ width: "100%", height: "100%", margin: "auto" }} >
			{/* <div className="game-bar">
				<div className="user-side">
					<div className="user-info">
						<div className="user-img">
							<img alt="Lion" src="http://localhost:3333/profile/avatars/bamghoug.jpeg" style={{ width: "auto" }} />
						</div>
						<p>Test</p>
					</div>

				</div><div className="users-score"><p><span>12</span> : <span>12</span></p></div><div className="user-side">
					<div className="user-info">
						<div className="user-img"><img alt="Lion" src="http://localhost:3333/profile/avatars/bamghoug.jpeg" style={{ width: "auto" }} /></div>
						<p>ziloughm</p>
					</div>

				</div>
			</div> */}
			<ModeDialog>
				<ModesInput watch={false} />
			</ModeDialog>
			{isGameSet && <Canvas />}
		</Box>
	)
}

export default Game