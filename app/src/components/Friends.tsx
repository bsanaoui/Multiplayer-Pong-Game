import { Box, IconButton, List, Stack, Typography } from '@mui/material'
import messengerIcon from '../assets/messenger.png'
import Friend from './Friend';


function pickRandom() {
    const names: string[] = ["Nathanial Howell", "Leon Beard", "Madeleine Martin",
        "Cristopher Fitzgerald", "Judah Rose"];
    return names[Math.floor(Math.random() * names.length)];
}

const friends = Array.from({ length: 20 }, (_, index) => {
    return (
        <li key={index} className='item-friend'>
            <Friend name={pickRandom()} />
        </li>
    );
});

const Friends = () => {
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
                        <img src={messengerIcon} width="37px" alt='MessengerIcon'/>
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
                <Stack spacing={3} direction="row" margin="40px 23px 20px 9px">
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
                <List style={{ overflow: 'auto', height:"100%"}} >
                    {friends}
                </List>
            </Stack>
        </Box>
    )
}

export default Friends