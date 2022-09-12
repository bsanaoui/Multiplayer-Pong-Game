import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import friendIcon from '../assets/friends.png'
import { FriendButton } from './FriendButton';


// const friends = Array.from({ length: 20 }, (_, index) => {
//     return (
//         <li key={index} className='item-friend'>
//             <Friend name={pickRandom()} />
//         </li>
//     );
// });

const Friends = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#202541",
                // width: "500px",
                height: '100vh',
                padding: '30px',

            }}>
            <Stack height="100%">
                <Stack spacing={1} direction="row" marginBottom= "2.4em">
                    <IconButton>
                        <img src={friendIcon} width="37px" alt='MessengerIcon' />
                    </IconButton>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '28px',
                            lineHeight: '109.52%',

                        }}>
                            Friends
                        </Typography>
                    </div>
                </Stack>
                <List style={{ overflow: 'auto', height: "100%" }} >
                    {/* {friends} */}
                    <li key='3' className='item-friend'>
                        <FriendButton name="Hamza" />
                    </li>
                    <li key='1' className='item-friend'>
                        <FriendButton name="Safa" />
                    </li>
                    <li key='2' className='item-friend'>
                        <FriendButton name="Brahim" />
                    </li>
                    <li key='4' className='item-friend'>
                        <FriendButton name="Soukaina" />
                    </li>
                </List>
            </Stack>
        </Box>
    )
}

export default Friends