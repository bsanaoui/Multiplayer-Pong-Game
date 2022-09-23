import { Login } from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { UserMessaging } from '../requests/directMessage';
import { RootState } from '../store';
import { changeCurrConversation } from "../store/chatUiReducer";
import DropMenu from './DropMenus/DropMenuRoom';
import DropMenuUser from './DropMenus/DropMenuUser';



export const UserButtonChat = (props:{user: UserMessaging, socket: Socket}) => {
    const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
    const dispatch = useDispatch();

    let backgroundButton: string = currentConv !== props.user.login ? "#2E3256" : "#4289F3";
    return (
        <Box
            onClick={() => { dispatch(changeCurrConversation({ user: props.user.login, avatar: props.user.avatar })) }}
            sx={{
                backgroundColor: backgroundButton,
                minWidth: '290px',
                width: '290px',
                height: '55px',
                borderRadius: '12px',
                position: 'relative',
                cursor: 'pointer',
            }}>
            <Stack spacing={2} direction="row" padding='3% 3%'
            >
                <Avatar
                    sx={{
                        height: '33px',
                        width: '33px',
                        backgroundColor: "#FFF",
                    }}>
                    {props.user.login.charAt(0)}
                </Avatar>
                <Box
                >
                    <Typography
                        sx={{
                            fontFamily: 'Lexend',
                            fontWeight: '500',
                            fontSize: '1.15rem',
                            fontStyle: 'normal',
                            margin: '5.2% auto'
                        }}>{props.user.username}</Typography>
                </Box>
                <div style={{ marginLeft: 'auto' }}>
                    <DropMenuUser is_dm_user={true} user={props.user} socket={props.socket}/>
                </div>
            </Stack>
        </Box >
    )
}