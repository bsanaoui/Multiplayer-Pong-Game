import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import friendIcon from '../assets/friends.png'
import { FriendButton } from './FriendButton';
import { useContext, useEffect, useState } from 'react';
import { Friend, getFriends } from '../requests/directMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

let initFriends: Friend[] = [] as Friend[];
initFriends.length = 0;
const Friends = () => {
    const [friends, setFriends] = useState(initFriends);
    const logged_user = useSelector((state: RootState) => state.user).login;
    const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
    const socket = useSelector((state: RootState) => state.socketclient).socket;
    const connection = useSelector((state: RootState) => state.user).connection;

    const navigate = useNavigate();

    function getMyFriends() {
        getFriends().then((value) => {
            if ((typeof value) === (typeof initFriends)) {
                const data = value as Friend[];
                setFriends(data);
            }
        })
        .catch((error: any) => {
            console.log("Error ;Not Authorized", error);
            navigate(error.redirectTo);
        }) 
    }

    const receiveUpdate = () => {
        socket.on('friends', (data: { status: boolean, from: string, to: string }) => {
            console.log("New friends");
            if (data.from === logged_user || data.to === logged_user)
                getMyFriends();
        })
    }

    useEffect(() => {
        if (socket)
            receiveUpdate();
        return (() => {
            socket.off("friends");
        })
    },)

    useEffect(() => {
        getMyFriends();
        return (() => {
			setFriends(initFriends);
            console.log("clear friends");
		});
    }, [connection]) 

    return (
        <Box
        className='friends'
            sx={{
                backgroundColor: "#202541",
                width: "calc(100% - 510px)",
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
                    {friends && friends.map((item) => (
                        <li key={item.id} className='item-friend'>
                            <FriendButton friend={item} />
                        </li>
                    ))}
                    {!friends.length &&
						<Typography
							sx={{
								width: '100%',
								// whiteSpace: "nowrap",
								color: '#ADADAD',
								fontWeight: '400',
								fontSize: '1rem',
								paddingTop: '1.2px',
								paddingLeft: "8px",
							}}>Invite a friend.. NOW !!</Typography>
					}
                </List>
            </Stack>
        </Box>
    )
}

export default Friends