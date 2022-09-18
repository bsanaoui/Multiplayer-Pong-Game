import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import usersRoomIcon from '../assets/usersRoom.png'
import { UserButtonChat } from './UserButtonChat';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initSocketClient, disconnectSocket } from "../store/socketReducer";
import { RootState } from '../store';

export const UsersMessaging = () => {
    const logged_user = useSelector((state: RootState) => state.user).login;
    const currentConv = useSelector((state: RootState) => state.chat).curr_converation;

    const dispatch = useDispatch();

    useEffect(() => {

        if (currentConv && logged_user) {
            dispatch(initSocketClient({
                host: process.env.REACT_APP_SERVER_IP as string, auth: {
                    auth: {
                        from: logged_user,
                        to: currentConv,
                    }
                }
            }));

        }
        return () => {
            dispatch(disconnectSocket());
        }
    })

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
                    {/* {friends} */}
                    <li key='3' className='item-friend'>
                        <UserButtonChat name="Hamza" />
                    </li>
                    <li key='1' className='item-friend'>
                        <UserButtonChat name="Safa" />
                    </li>
                    <li key='2' className='item-friend'>
                        <UserButtonChat name="Brahim" />
                    </li>
                    <li key='4' className='item-friend'>
                        <UserButtonChat name="Soukaina" />
                    </li>
                </List>
            </Stack>
        </Box>
    )
}