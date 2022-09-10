import { List, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import reloadIcon from '../assets/reload-icon.png'
import Header from './Header'
import LiveMatchBtn from './LiveMatchBtn'

// const data_rooms: Array<RoomData> = [
// 	{ name: 'Room Cmos 3.x', owner: 'bsana..', _count : {users_room: 84} },
// 	{ name: 'Gtx Cmos 3.x', owner: 'Testos..',  _count : {users_room: 47} },
// ];

// export type RoomData = {
//     name: string,
//     owner: string,
//     _count :{
//       users_room: number
//     }

// };

export const LiveMatchs = () => {
    return (
        <Stack >
            <Header />
            <Stack
                spacing={3}
                sx={{
                    width: '100%', marginTop: '50px', marginLeft: '9%'
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
                    <img src={reloadIcon} style={{ width: 35 }} />
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
