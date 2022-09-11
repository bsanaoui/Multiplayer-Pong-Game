import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import usersRoomIcon from '../assets/usersRoom.png'
import { UserButton } from './UserButton';

// function pickRandom() {
//     const names: string[] = ["JoinRoom1", "JoinRoom2", "JoinRoom3",
//         "JoinRoom4", "JoinRoom5"];
//     return names[Math.floor(Math.random() * names.length)];
// }

// const rooms = Array.from({ length: 5 }, (_, index) => {
//     return (
//         <li key={index} className='item-friend'>
//             <RoomButtonChat name={pickRandom()} />
//         </li>
//     );
// });


export const UsersRoom = () => {
    // init UsersRoom, fetch with axios and when change room init!! && unmout component!!
    // useEffect(() => {
  
    // },)

    return (
        <Box
            sx={{
                backgroundColor: "#262948",
                height: '100vh',
                padding: '30px',
                borderLeft: "1px solid #FFFFFF",
                paddingTop: "7.2em"

            }}>
            <Stack height="100%">
                <Stack spacing={1} direction="row" marginBottom="3%">
                    <IconButton >
                        <img src={usersRoomIcon} width="30px" alt='roomIcon' />
                    </IconButton>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '22px',
                            lineHeight: '109.52%',

                        }}>
                            Room Users
                        </Typography>
                    </div>
                </Stack>

                <List style={{ overflow: 'auto', height: "100%" }} >
                    {/* {friends} */}
                    <li key='3' className='item-friend'>
                        <UserButton id={0} username={'Hama'} avatar={''} user_role={''} />
                    </li>
                    <li key='1' className='item-friend'>
                        <UserButton id={0} username={'Safa'} avatar={''} user_role={''} />

                    </li>
                    <li key='2' className='item-friend'>
                        <UserButton id={0} username={'Brahim'} avatar={''} user_role={''} />

                    </li>
                    <li key='4' className='item-friend'>
                        <UserButton id={0} username={'Soukaina'} avatar={''} user_role={''} />

                    </li>
                </List>
            </Stack>
        </Box>
    )
}