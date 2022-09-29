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
import { boolean } from 'yup';
import { handleToastMsg } from './InfoMessages/Toast';
import { toast } from 'react-toastify';

let initUsers: UserMessaging[] = [] as UserMessaging[];
initUsers.length = 0;
export const UsersMessaging = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(initUsers);
    const logged_user = useSelector((state: RootState) => state.user).login;
    const socket = useSelector((state: RootState) => state.socketclient).socket;
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
        console.log("recieveUpdate ??????");
        socket.on('instant_messaging', (data: { status: boolean, action: string, msg: string, from: string, to: string }) => {
            if (data.action === "join") {
                if (data.from === logged_user || data.to === logged_user)
                    getUsers();
                if (data.from === logged_user) {
                    handleToastMsg(data.status, data.msg);
                    dispatch(changeCurrConversation({ user: currentConv, avatar: currentConvAvatar }));
                }
                else if (data.to === logged_user)
                toast.info(data.from + " waving you 👋");
            }
            else if (data.action === "block") {
                if (data.from === logged_user || data.to === logged_user)
                    getUsers();
                if (data.from === logged_user)
                    handleToastMsg(data.status, data.msg);
                else if (data.to === logged_user && data.from !== currentConv)
                    dispatch(changeCurrConversation({ user: currentConv, avatar: currentConvAvatar }));
            }
        })
    }


    console.log("User Messaging");

    useEffect(() => {
        if (socket)
            receiveUpdate();
        return (() => {
            socket.off("instant_messaging");
        })
    },)

    useEffect(() => {
        if (socket)
            receiveUpdate();
        return (() => {
            socket.off("instant_messaging");
        })
    },)


    useEffect(() => {
        joinDmRoom();
        getUsers();

        return () => {
            // setUsers(initUsers);
            // setRecieve(false);
            console.log("clear users");
        }
    }, [currentConv])

    return (
        <Box
        className='dm_messaging'
            sx={{
                backgroundColor: "#262948",
                height: '100vh',
                padding: '30px',
                borderLeft: "1px solid #FFFFFF",

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
            {/* {alertMsg.is_alert && <AlertMsg is_alert={alertMsg.is_alert} status={alertMsg.status} msg={alertMsg.msg} />} */}
        </Box>
    )
}