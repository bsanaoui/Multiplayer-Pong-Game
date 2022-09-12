import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import usersRoomIcon from '../assets/usersRoom.png'
import { requestUsersRoom } from '../requests/rooms';
import { RootState } from '../store';
import { clearUsersRoom, initUsesrRoom, UserOfRoom } from '../store/roomUsersReducer';
import { UserButton } from './UserButton';

// let prev_room: string = '';
let index_user: number = 0;

export const UsersRoom = () => {
    const dispatch = useDispatch();
    const curr_room = useSelector((state: RootState) => state.chat).curr_room;
    const users_room = useSelector((state: RootState) => state.room_users);

    // init UsersRoom, fetch with axios and when change room init!! && unmout component!!
    useEffect(() => {
        requestUsersRoom(curr_room).then((value) => {
            const data = value as Array<UserOfRoom>;
            dispatch(initUsesrRoom(data));
        })

        return () => {
            dispatch(clearUsersRoom());
        }
    }, [curr_room])
    // })

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
                    {users_room.map((item) => (
                        <li key={index_user++} className='item-friend'>
                            <UserButton id={item.id} username={item.username} avatar={item.avatar} user_role={item.user_role} />
                        </li>
                    ))}
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