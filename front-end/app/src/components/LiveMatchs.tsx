import { List, Stack, Typography } from '@mui/material'
import reloadIcon from '../assets/reload-icon.png'
import Header from './Header'
import LiveMatchBtn from './LiveMatchBtn'


export const LiveMatchs = () => {
    return (
        <Stack >
            <Header />
            <Stack
                spacing={3}
                sx={{
                    width: '100%', marginTop: '50px', marginLeft: '6.5%'
                }}>
                <Stack
                    spacing={2}
                    direction='row'>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            lineHeight: ' 35.05px',
                            align: 'center',
                        }}>
                        Live Matchs</Typography>
                    <img alt="Reload Icon" src={reloadIcon} style={{ width: 35 }} />
                </Stack>
                <List style={{ width: "90%", overflow: 'auto', height: "90%" }} >
                    {/* {friends} */}
                    <li key='3' className='item-live-match'>
                        <LiveMatchBtn />
                    </li>
                    <li key='1' className='item-live-match'>
                        <LiveMatchBtn />
                    </li>
                    <li key='2' className='item-live-match'>
                        <LiveMatchBtn />
                    </li>
                    <li key='4' className='item-live-match'>
                        <LiveMatchBtn />
                    </li>
                </List>
            </Stack>
        </Stack>
    )
}
