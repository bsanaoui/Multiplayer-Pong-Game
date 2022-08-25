import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import React from 'react';
import roomIcon from '../assets/group.png'
import RoomButtonChat from './RoomButtonChat';


function pickRandom() {
    const names: string[] = ["Nathanial Howell", "Leon Beard", "Madeleine Martin",
        "Cristopher Fitzgerald", "Judah Rose"];
    return names[Math.floor(Math.random() * names.length)];
}

const rooms = Array.from({ length: 5 }, (_, index) => {
    return (
        <div className='item-friend'>
            <RoomButtonChat name={pickRandom()} />
        </div>
    );
});

const Rooms = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#202541",
                // width: "500px",
                height: '100vh',
                padding: '30px'

            }}>
            <Stack height="100%">
                <Stack spacing={1} direction="row">
                    <IconButton>
                        <img src={roomIcon} width="37px" alt='roomIcon' />
                    </IconButton>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '28px',
                            lineHeight: '109.52%',

                        }}>
                            Chat Room
                        </Typography>
                    </div>
                </Stack>
                <Stack spacing={3} direction="row" margin="40px 23px 20px 9px">
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '22px',
                        lineHeight: '109.52%',

                    }}>
                        Rooms
                    </Typography>
                    <div className='dot-nb center-button'>
                        8
                    </div>
                    <div style={{
                        marginLeft: "auto",
                    }}>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '109.52%',
                            textDecorationLine: 'underline',
                        }}>
                            Start new chat
                        </Typography>
                    </div>
                </Stack>
                <List style={{ overflow: 'auto', height: "100%" }} >
                    {rooms}
                </List>
            </Stack>
        </Box>
    )
}

export default Rooms