import { Fullscreen } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

import animatedPong from '../assets/animatedPong.gif'
import HeaderPong from '../assets/HeaderPong.png'


const Header = () => {
	return (
		<Stack
			sx={{
				width: '100%',
				backgroundColor: '#000',
			}}
			direction="row"
			spacing={1}>
			<Box
				sx={{
					width: '100%',
				}}>
				<Stack
					spacing={1}>
					<Box
						sx={{
							height: "50%",
						}}>
						<img src={HeaderPong} className="center-img" height="130px" />
					</Box>
					<Box className='center-button' >
						<div className='button-custom center-text center-button' style={{ width: '280px' }}>
							Start a new room
						</div>
					</Box>
				</Stack>
			</Box>
			<Box
				sx={{
					width: '100%',
				}}>
				<img src={animatedPong} className="center-img" height="210px" />
			</Box>
			<Box
				sx={{
					width: '100%',
				}}></Box>
		</Stack>
	)
}

export default Header