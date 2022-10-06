import { Avatar, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import avatar1 from '../assets/man.png'

interface MessageProps {
	msg: string,
	avatar:string,
}

const MessageSent = ({ msg, avatar }: MessageProps) => {
	return (
		<div>
			<Stack
				spacing={0}
				sx={{
					width: '335px',
				}}>
				<Box
					sx={{
						backgroundColor: '#3475D7',
						width: '300px',
						padding: '0.7em',
						borderRadius: '14px',
					}}>
					<Typography
						sx={{
							fontFamily: 'Lexend',
							fontStyle: 'normal',
							fontWeight: '500',
							fontSize: '15px',
							lineHeight: '140%',
						}}>
						{msg}
					</Typography>
				</Box>
				<div style={{ marginLeft: '86%' }}>
					<Avatar
						sx={{
							height: '47px',
							width: '47px',
							backgroundColor: "#FFF",
							// padding: "3px",
						}}
						alt="" src={avatar} imgProps={{ style: { width: 'auto' } }} />
				</div>

			</Stack>
		</div>
	)
}

export default MessageSent