import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import friendIcon from '../assets/friends.png'
import { FriendButton } from './FriendButton';
import { useContext, useEffect, useState } from 'react';
// import { SocketContext, SocketContextType } from '../context/socket';
import { Friend, getFriends } from '../requests/directMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

let initFriends: Friend[] = [] as Friend[];
initFriends.length = 0;
const Friends = () => {
    // const { socket } = useContext(SocketContext) as SocketContextType;
    const [friends, setFriends] = useState(initFriends);
    const logged_user = useSelector((state: RootState) => state.user).login;
    const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
    // const [is_recieve_update, setRecieve] = useState(false);
    const socket = useSelector((state: RootState) => state.socketclient).socket;


    function getMyFriends() {
        getFriends().then((value) => {
            if ((typeof value) === (typeof initFriends)) {
                const data = value as Friend[];
                setFriends(data);
            }
        })
            .catch((message: string) => {
                console.log("Error; Friends", message)
            })
    }

    const receiveUpdate = () => {
        // setRecieve(true);
        socket.on('friends', (data: { status: boolean, from: string, to: string }) => {
            console.log("friend ????????")
            if (data.from === logged_user || data.to === logged_user)
                getMyFriends();
        })
    }


    useEffect(() => {
        getMyFriends();
        // if (socket)
        //     receiveUpdate();
        return () => {
            // setFriends(initFriends);
            console.log("clear friends");
        }
    }, [currentConv]) // add currentConv

    return (
        <Box
            sx={{
                backgroundColor: "#202541",
                width: "355px",
                height: '100vh',
                padding: '30px',

            }}>
            <Stack height="100%">
                <Stack spacing={1} direction="row" marginBottom="2.4em">
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
                    {friends.length && friends.map((item) => (
                        <li key={item.id} className='item-friend'>
                            <FriendButton friend={item} />
                        </li>
                    ))}
                </List>
            </Stack>
        </Box>
    )
}

export default Friends