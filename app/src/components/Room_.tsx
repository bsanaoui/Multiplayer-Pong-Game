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
                    backgroundColor: "#4289F3", // 2E3256
                    width: '310px',
                    height: '54px',
                    paddingTop: '9px',
                    paddingLeft: '13px',
                    borderRadius: '14px',
                }}>
                <Stack spacing={2} direction="row"
                >
                    <div>
                        <Avatar
                            sx={{
                                height: '35px',
                                width: '35px',
                                backgroundColor: "#FFF",
                                padding: "3px",
                            }}>
                            {name.charAt(0)}
                        </Avatar>
                    </div>
                    <Stack>
                        <Typography
                            sx={{
                                fontWeight: '500',
                                fontSize: '1.4rem',
                                fontStyle: 'normal',
                            }}>{name}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}

export default Room_