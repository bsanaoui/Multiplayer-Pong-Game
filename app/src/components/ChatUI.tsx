import { alpha, Button, FormControl, IconButton, InputBase, InputLabel, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import HeaderChat from './HeaderChat'
import SendIcon from '@mui/icons-material/Send'
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';
// import sendIcon from '../assets/send_icon.png'


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: '12px 0 0 12px',
        position: 'relative',
        backgroundColor: "#151416",
        // border: '1px solid #ced4da',
        fontSize: 13,
        width: '440px',
        height: '50px',
        padding: '10px 20px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            // borderColor: theme.palette.primary.main,
        },
    },
}));

const ChatUI = () => {
    return (
        <Box
            bgcolor="#202541"
            sx={{
                backgroundColor: "#202541",
                width: "600px",
                height: '100vw',

            }}>
            <Stack spacing={2}>
                <HeaderChat name="JockThem" />
                {/* <MessageSent msg={msg}/>
                <MessageRecieved msg={msg}/>    */}
                <Stack direction="row">
                    <FormControl variant="standard" sx={{ paddingLeft: "20px" }}>
                        <BootstrapInput defaultValue="Write a message ..." id="bootstrap-input" />
                    </FormControl>
                    <div style={{
                        backgroundColor: "#151416", padding: "10px", borderRadius: '0 12px 12px 0',
                    }}>
                        <Button sx={{ backgroundColor: "#3475D7", height: "50px", color: "#FFF" }}>
                            <SendIcon />
                        </Button>
                    </div>
                </Stack>
            </Stack>
        </Box>
    )
}

const msg: string = "typesetting industry. Lorem Ipsum Dom";

export default ChatUI