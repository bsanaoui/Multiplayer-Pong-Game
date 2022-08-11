import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const RoomButton = () => {
	return (
		<Box
			sx={{
				width: '320px',
				height: '210px',
				boxSizing: 'border-box',
				background: 'linear-gradient(110.14deg, #355B88 27.7%, #341760 83.08%)',
				border: '2px solid #FFFFFF',
				borderRadius: '27px',
			}}>
			<Box
				sx={{
					margin:'15px 20px'
				}}>
				<div className='room-title center-text center-button' style={{ padding: '0 15px' }}>
					Room Cmos 3.x
				</div>
			</Box>

			<Box
				sx={{
					margin:'10px 23px'

				}}>
				<div className='dot center-text center-button' style={{ padding:'1px' , marginLeft:'5px'}}>
					B
				</div>
				<Typography
					sx={{
						fontFamily: 'Lexend, sans-serif',
						fontWeight: '300px',
					}}>
					bsana..</Typography>
			</Box>
		</Box>
	)
}

export default RoomButton