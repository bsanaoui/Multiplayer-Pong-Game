import { Avatar, Box, ListItem, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import avatar1 from '../assets/man.png'
import avatar2 from '../assets/avatar2.png'


interface AvatarProps {
    name: string,
    url: string,
}

export const AvatarPlayer = (props: AvatarProps) => {
    return (
        <Stack spacing={1} alignItems="center" width='4rem'>
            <Avatar
                sx={{
                    height: '3rem',
                    width: '3rem',
                    backgroundColor: "#FFF",
                    padding: "7px",
                }}
                alt="Lion" src={props.url} imgProps={{ style: { width: 'auto' } }} />
            <Typography sx={{
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '17px',
                lineHeight: '109.52%',
            }}>
                {props.name}
            </Typography>
        </Stack>
    )
}

const LiveMatchBtn = () => {
    return (
        <Box
            sx={{
                width: '310px',
                height: '170px',
                background: 'linear-gradient( 110.14deg, #355B88 27.7%, #341760 83.08% )',
                border: '2px solid #FFFFFF',
                borderRadius: '27px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                paddingTop: '0.5%',
            }}>
            <Stack
                spacing={1.5}
                justifyContent="space-between"
                alignItems="center">
                <ListItem sx={{ width: '38%' }}>
                    <Box className='red_dot' marginRight='10%' />
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '17px',
                        lineHeight: '109.52%',
                    }}>
                        LIVE
                    </Typography>
                </ListItem>
                <Stack spacing={1} direction="row" justifyContent="space-between">
                    <AvatarPlayer name="Cmos" url={avatar2} />
                    <div style={{ marginTop: '1%' }}>
                        <Typography sx={{
                            fontWeight: '800',
                            fontSize: '2.15rem',
                        }}>
                            15 - 11
                        </Typography>
                    </div>
                    <AvatarPlayer name="Brahim" url={avatar1} />
                </Stack>
                <div style={{ marginTop: '2.5%' }}>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '0.8rem',
                        color: '#BBFCE4',
                    }}>
                        - Retro -
                    </Typography>
                </div>
            </Stack>
        </Box>
    )
}

export default LiveMatchBtn