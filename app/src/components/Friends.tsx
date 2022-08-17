import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import messengerIcon from '../assets/messenger.png'

const Friends = () => {
    return (
        <Box
            bgcolor="#202541"
            sx={{
                backgroundColor: "#202541",
                width: "500px",
                height: '100vh',
                padding: '30px'

            }}>
            <Stack>
                <Stack spacing={1} direction="row">
                    <IconButton>
                        <img src={messengerIcon} width="50px" />
                    </IconButton>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '36px',
                            lineHeight: '109.52%',

                        }}>
                            Instant Messaging
                        </Typography>
                    </div>
                </Stack>
                <Stack spacing={3} direction="row" margin="25px 15px">
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '22px',
                        lineHeight: '109.52%',

                    }}>
                        Friends
                    </Typography>
                    <div className='dot-nb center-button'>
                        8
                    </div>
                    <div style={{
                        margin: "auto",
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
            </Stack>
        </Box>
    )
}

export default Friends