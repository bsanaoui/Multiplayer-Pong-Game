import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import groupIcon from '../assets/group-icon.svg'

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
					margin: '15px 20px'
				}}>
				<div className='room-title center-text center-button' style={{ padding: '0 15px' }}>
					Room Cmos 3.x
				</div>
			</Box>

			<Stack
				direction="row"
				spacing={1}
				sx={{
					margin: '23px 23px 0px',
				}}>
				<Box>
					<div className='dot center-text center-button' style={{ padding: '1px', marginLeft: '5px' }}>
						B
					</div>
					<Typography
						sx={{
							fontWeight: '300px'
						}}>
						bsana..</Typography>
				</Box>
				<Box>
					<div className='dot-dotted' />
				</Box>
			</Stack>
			<Stack
				direction="row"
				spacing={2}
				sx={{
					marginLeft: '25px',
					marginTop: '10px'
				}}>
				<img src={groupIcon} alt="room users" style={{ height: 34, marginTop: 14 }} />
				<div style={{ fontSize: '44px', fontWeight: 550 }}>58</div>
			</Stack>
		</Box>
	)
}

export default RoomButton