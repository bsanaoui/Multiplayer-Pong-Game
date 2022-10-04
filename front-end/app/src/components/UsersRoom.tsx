import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import usersRoomIcon from '../assets/usersRoom.png'
// import { SocketContext, SocketContextType } from '../context/socket';
import { requestUsersRoom } from '../requests/rooms';
import { RootState } from '../store';
import { clearUsersRoom, initUsesrRoom, UserOfRoom } from '../store/roomUsersReducer';
import { UserButton } from './UserButton';


export const UsersRoom = () => {
    const dispatch = useDispatch();
    const users_room = useSelector((state: RootState) => state.room_users);
    const currentRoom = useSelector((state: RootState) => state.chat).curr_room;
    const role_user = useSelector((state: RootState) => state.chat).curr_role;
    const socket = useSelector((state: RootState) => state.socketclient).socket;

    function getUsersRoom() {
        requestUsersRoom(currentRoom).then((value) => {
            const data = value as Array<UserOfRoom>;
            if (typeof (data) === (typeof (users_room)))
                dispatch(initUsesrRoom(data));
        }).catch((reason: string) => {
            console.log("Error ;User of Rooms", reason)
        })
    }


    useEffect(() => {
        // if (users_room.length === 0 && currentRoom !== '')
        getUsersRoom();
        
        if (currentRoom === '')
            dispatch(clearUsersRoom());
        return () => {
            dispatch(clearUsersRoom());
        }
    }, [currentRoom])

    return (

        <Box
            className='users_room'
            sx={{
                backgroundColor: "#262948",
                height: '100vh',
                padding: '30px',
                borderLeft: "1px solid #FFFFFF",
                paddingTop: "7.2em",
            }}>
            <Stack height="100%" width="290px">
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
                            Room Users ({users_room.length})
                        </Typography>
                    </div>
                </Stack>

                <List style={{ overflow: 'auto', height: "100%" }} >
                    {users_room && users_room.map((item) => (
                        <li key={item.id} className='item-friend'>
                            <UserButton user={item} socket={socket} role_user={role_user} />
                        </li>
                    ))}
                </List>
            </Stack>
        </Box>
    )
}