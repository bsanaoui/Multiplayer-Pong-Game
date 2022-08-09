import { Fullscreen } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

import animatedPong from '../assets/animatedPong.gif'
import HeaderPong from '../assets/HeaderPong.png'


const Header = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '15vh',
				backgroundColor: '#001E3C',
			}}
		>
			<Stack
				direction="row"
				spacing={1}
				sx={{
					height: '100%'
				}}>
				<Box
					sx={{
						width: '100%',
						backgroundColor: '#005E3C',
					}}>
					<Stack
						spacing={1}
						sx={{
							height: '15vh',
						}}>
						<Box
							sx={{
								height: "50%",
								backgroundColor: '#008E3C',
							}}>
							<img src={HeaderPong} className="center-img" />
						</Box>
						<Box
							sx={{
								height: "50%",
								backgroundColor: '#008E3C',
							}}>
							<Button className='button-custom'>
								<Typography variant="h6">
									Start a new room
								</Typography>
							</Button>
						</Box>
					</Stack>
				</Box>
				<Box
					sx={{
						width: '100%',
						backgroundColor: '#007E3C',
					}}>
					<img src={animatedPong} className="center-img" />
				</Box>
				<Box
					sx={{
						width: '100%',
						backgroundColor: '#005E3C',
					}}></Box>
			</Stack>
		</Box>
	)
}

export default Header