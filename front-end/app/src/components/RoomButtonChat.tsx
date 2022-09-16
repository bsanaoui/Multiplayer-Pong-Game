import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { changeCurrRoom } from "../store/chatUiReducer";
import DropMenuRoom from './DropMenus/DropMenuRoom';

interface RoomProps {
    name: string
}

const RoomButtonChat = ({ name }: RoomProps) => {
    const currentRoom = useSelector((state: RootState) => state.chat).curr_room;
    const dispatch = useDispatch();

    let backgroundButton: string = currentRoom !== name ? "#2E3256" : "#4289F3";
    return (
        <Box
            onClick={() => { dispatch(changeCurrRoom(name)) }}
            sx={{
                backgroundColor: backgroundButton,
                minWidth: '290px',
                width: '290px',
                height: '55px',
                borderRadius: '12px',
                position: 'relative',
                cursor: 'pointer',
            }}>
            <Stack spacing={2} direction="row" padding='3.5% 3%'
            >
                <Avatar
                    sx={{
                        height: '33px',
                        width: '33px',
                        backgroundColor: "#FFF",
                    }}>
                    {name.charAt(0)}
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
                        }}>{name}</Typography>
                </Box>
                <div style={{ marginLeft: 'auto' }}>
                    <DropMenuRoom/>
                </div>
            </Stack>
        </Box >
    )
}

export default RoomButtonChat