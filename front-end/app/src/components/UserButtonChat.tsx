import { Avatar, Badge, Box, Icon, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { changeCurrConversation } from "../store/chatUiReducer";
import DropMenu from './DropMenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { margin } from '@mui/system';
import { useState } from 'react';



const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

interface RoomProps {
    name: string
}

export const UserButtonChat = ({ name }: RoomProps) => {
    const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
    const dispatch = useDispatch();

    let backgroundButton: string = currentConv !== name ? "#2E3256" : "#4289F3";
    return (
        <Box
            onClick={() => { dispatch(changeCurrConversation(name)) }}
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
                    <DropMenu/>
                </div>
            </Stack>
        </Box >
    )
}