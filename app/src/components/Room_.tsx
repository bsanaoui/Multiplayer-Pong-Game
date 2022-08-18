import { Avatar, Badge, Box, Icon, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import avatar2 from '../assets/avatar2.png'

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

interface RoomProps {
    name: string
}

const Room_ = ({ name }: RoomProps) => {
    return (
        <div>
            <Box
                sx={{
                    backgroundColor: "#2E3256", // 2E3256
                    width: '420px',
                    height: '66px',
                    borderRadius: '14px',
                }}>
                <Stack spacing={2} direction="row" padding="0.9em"
                >
                    <div>
                        <Avatar
                            sx={{
                                height: '33px',
                                width: '33px',
                                backgroundColor: "#FFF",
                                padding: "3px",
                            }}>
                            {name.charAt(0)}
                        </Avatar>
                    </div>
                    <Stack>
                        <Typography
                            sx={{
                                fontFamily:'Lexend',
                                fontWeight: '500',
                                fontSize: '1.3rem',
                                fontStyle: 'normal',
                            }}>{name}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}

export default Room_