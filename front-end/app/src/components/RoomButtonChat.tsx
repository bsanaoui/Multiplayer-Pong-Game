import { Avatar, Badge, Box, Icon, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { changeCurrRoom } from "../store/chatUiReducer";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

interface RoomProps {
    name: string
}

const RoomButtonChat = ({ name }: RoomProps) => {
    const currentRoom = useSelector((state: RootState) => state.chat).curr_room;
    const dispatch = useDispatch();

    let backgroundButton:string = currentRoom !== name ? "#2E3256" : "#4289F3";
    return (
        <div onClick={() => {dispatch(changeCurrRoom(name))}} className="center-button">
            <Box
                sx={{
                    backgroundColor: backgroundButton,
                    width: '420px',
                    height: '66px',
                    borderRadius: '14px',
                }}>
                <Stack spacing={2} direction="row" padding="0.9em"
                >
                    <div>
                        <Avatar
                            sx={{
                                height: '33px',
                                width: '33px',
                                backgroundColor: "#FFF",
                                padding: "3px",
                            }}>
                            {name.charAt(0)}
                        </Avatar>
                    </div>
                    <Stack>
                        <Typography
                            sx={{
                                fontFamily:'Lexend',
                                fontWeight: '500',
                                fontSize: '1.3rem',
                                fontStyle: 'normal',
                            }}>{name}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}

export default RoomButtonChat