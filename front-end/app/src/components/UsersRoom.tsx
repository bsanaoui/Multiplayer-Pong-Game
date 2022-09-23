import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import usersRoomIcon from '../assets/usersRoom.png'
import { SocketContext, SocketContextType } from '../context/socket';
import { requestUsersRoom } from '../requests/rooms';
import { RootState } from '../store';
import { clearUsersRoom, initUsesrRoom, UserOfRoom } from '../store/roomUsersReducer';
import { AlertMsg, initAlertMsg } from './InfoMessages/AlertMsg';
import { UserButton } from './UserButton';


export const UsersRoom = (props: { curr_room: string }) => {
    const dispatch = useDispatch();
    const users_room = useSelector((state: RootState) => state.room_users);
    const { socket } = useContext(SocketContext) as SocketContextType;
    const logged_user = useSelector((state: RootState) => state.user).login;
	const [alertMsg, setAlertMsg] = useState(initAlertMsg);


    function getUsersRoom() {
        requestUsersRoom(props.curr_room).then((value) => {
            const data = value as Array<UserOfRoom>;
            if (typeof (data) === (typeof (users_room)))
                dispatch(initUsesrRoom(data));
        }).catch((reason: string) => {
            console.log("Error ;User of Rooms", reason)
        })
    }

    const receiveUpdate = () => {
        socket.on('usersOfRoom', (data: { status: boolean}) => {
            getUsersRoom();
        })
    }

    useEffect(() => {
        if (users_room.length === 0)
            getUsersRoom();
        receiveUpdate();
        return () => {
            dispatch(clearUsersRoom());
        }
    }, [socket])

    return (

        <Box
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
                            <UserButton id={item.id} login={item.login} username={item.username} avatar={item.avatar} user_role={item.user_role} />
                        </li>
                    ))}
                </List>
            </Stack>
        </Box>
    )
}