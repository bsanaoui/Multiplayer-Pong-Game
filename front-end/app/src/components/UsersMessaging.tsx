import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import usersRoomIcon from '../assets/usersRoom.png'
import { UserButtonChat } from './UserButtonChat';
import { useContext, useEffect, useState } from "react";
import { RootState } from '../store';
import { geMessagingUsers, UserMessaging } from '../requests/directMessage';
import { useSelector } from 'react-redux';
import { SocketContext, SocketContextType } from '../context/socket';
import { AlertMsg, initAlertMsg } from './InfoMessages/AlertMsg';
import { useDispatch } from 'react-redux';
import { changeCurrConversation } from '../store/chatUiReducer';

let initUsers: UserMessaging[] = [] as UserMessaging[];

export const UsersMessaging = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(initUsers);
    const logged_user = useSelector((state: RootState) => state.user).login;
    const { socket } = useContext(SocketContext) as SocketContextType;
    const [alertMsg, setAlertMsg] = useState(initAlertMsg);
    const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
    const currentConvAvatar = useSelector((state: RootState) => state.chat).curr_conv_avatar;

    const joinDmRoom = () => {
        if (socket && currentConv !== '')
            socket.emit('join_dm_room', { to: currentConv });
    }

    function getUsers() {
        geMessagingUsers().then((value) => {
            if ((typeof value) === (typeof initUsers)) {
                const data = value as UserMessaging[];
                setUsers(data);
            }
        })
            .catch((reason: string) => {
                console.log("Error ;Rooms of User", reason)
            })
    }

    const receiveUpdate = () => {
        socket.on('instant_messaging', (data: { status: boolean, msg: string, from: string, to: string }) => {
            if (data.from === logged_user)
                setAlertMsg({ is_alert: true, status: data.status, msg: data.msg });
            if ((data.from === logged_user && data.to === currentConv) // connect with theme
                && (data.to === logged_user && data.from === currentConv)) {
                getUsers();
                if (users.length > 0)
                    dispatch(changeCurrConversation({ user: users[0].login, avatar: users[0].avatar }));
                else
                    dispatch(changeCurrConversation({ user: '', avatar: '' }));
            }
            else if ((data.from === logged_user && data.to !== currentConv) // connect with other (join other room)
                && (data.to === logged_user && data.from !== currentConv)) {
                getUsers();
                if (users.length > 0)
                    dispatch(changeCurrConversation({ user: currentConv, avatar: currentConvAvatar}));
                else
                    dispatch(changeCurrConversation({ user: '', avatar: '' }));
            }
        })
    }

    useEffect(() => {
        // Get Rooms
        if (users.length === 0)
            getUsers();

        joinDmRoom();

        receiveUpdate();
        return () => {
            setUsers(initUsers);
            console.log("clear users");
        }
    }, [socket, currentConv])

    return (
        <Box
            sx={{
                backgroundColor: "#262948",
                // width: "500px",
                height: '100vh',
                padding: '30px',
                borderLeft: "1px solid #FFFFFF",
                // paddingTop: "7.2em"

            }}>
            <Stack height="100%">
                <Stack spacing={1} direction="row">
                    <IconButton>
                        <img src={usersRoomIcon} width="36px" alt='roomIcon' />
                    </IconButton>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '28px',
                            lineHeight: '109.52%',
                        }}>
                            Instant Messaging
                        </Typography>
                    </div>
                </Stack>
                <Stack spacing={3} direction="row" margin="40px 35px 20px 9px">
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '109.52%',

                    }}>
                        Messages
                    </Typography>
                    <div className='dot-nb center-button'>
                        4
                    </div>
                    <div style={{
                        marginLeft: "auto",
                    }}>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '109.52%',
                            textDecorationLine: 'underline',
                            marginTop: "3%"
                        }}>
                            Create new msg
                        </Typography>
                    </div>
                </Stack>
                <List style={{ overflow: 'auto', height: "100%" }} >
                    {users.length && users.map((item) => (
                        <li key={item.id} className='item-friend'>
                            <UserButtonChat user={item} />
                        </li>
                    ))}
                </List>
            </Stack>
            {alertMsg.is_alert && <AlertMsg is_alert={true} status={alertMsg.status} msg={alertMsg.msg} />}
        </Box>
    )
}