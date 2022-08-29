import { Avatar, Box, Stack, Typography } from '@mui/material'
import avatar2 from '../assets/avatar2.png'
import dot3Icon from '../assets/dot3_white.png'

interface FriendProps {
    name: string
}

const HeaderChat = ({ name }: FriendProps) => {
    return (
        <Box
            sx={{
                backgroundColor: "#2E3256",
                width: '540px',
                height: '67px',
                paddingTop: '5px',
                paddingLeft: '13px',
                borderRadius: '0 0 15px 15px',
                margin:'auto',
            }}>
            <Stack spacing={2} direction="row"
                sx={{ paddingTop: '0.22em' }}>
                <div>
                    <Avatar
                        sx={{
                            height: '44px',
                            width: '44px',
                            backgroundColor: "#FFF",
                            padding: "3px",
                        }}
                        alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' }}} />
                </div>
                <Stack width="100%">
                    <Typography
                        sx={{
                            margin: 'auto 5px',
                            fontWeight: '600',
                            fontSize: '1.43rem',
                            fontStyle: 'normal',
                        }}>{name}</Typography>
                </Stack>
                <div style={{  margin: 'auto' }}>
					<img
						style={{ height: '28px', float: 'right' }}
						className="center" alt='users' src={dot3Icon} />
				</div>
            </Stack>
        </Box>
    )
}

export default HeaderChat