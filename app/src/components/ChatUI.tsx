import { Button, FormControl, InputBase, List, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import HeaderChat from './HeaderChat'
import SendIcon from '@mui/icons-material/Send'
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';


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
        // '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main,
        // },
    },
}));

const msgs = Array.from({ length: 5 }, (_, index) => {
    return (
        <div >
            <div style={{ float: 'right', marginTop: "5px" }}>
                <MessageSent msg="Caveat with refs Caveat with refs Caveat with refs" />
            </div>
            <div style={{ float: 'left', marginTop: "5px" }}>
                <MessageRecieved msg="Hello industry. Lorem Ipsum Dom" />
            </div>
            <div style={{ float: 'left', marginTop: "5px" }}>
                <MessageRecieved msg="Lorem Ipsum Dom ?" />
            </div>
            <div style={{ float: 'right', marginTop: "5px" }}>
                <MessageSent msg="See you" />
            </div>
        </div>
    );
});

const ChatUI = () => {
    return (
        <Box
            bgcolor="#202541"
            sx={{
                backgroundColor: "#202541",
                width: "600px",
                height: '100vh',
                // height: 'calc( 100vh - 67px )',
                paddingLeft: "20px",
                paddingRight: "20px",
                borderLeft: "1px solid #FFFFFF"

            }}>
            <Stack height='inherit'>
                <div>
                    <HeaderChat name="JockThem" />
                </div>
                <Stack spacing={2} direction="column-reverse" sx={{ width: "532px", minHeight: "calc( 100vh - 67px )", margin: 'auto'}}>
                    <Stack direction="row" marginBottom="45px">
                        <FormControl variant="standard" >
                            <BootstrapInput placeholder="Write a message ..." id="bootstrap-input" />
                        </FormControl>
                        <div style={{
                            backgroundColor: "#151416", padding: "10px", borderRadius: '0 12px 12px 0',
                        }}>
                            <Button sx={{ backgroundColor: "#3475D7", height: "50px", color: "#FFF" }}>
                                <SendIcon />
                            </Button>
                        </div>
                    </Stack>
                    <List style={{ overflow: 'auto', padding: '0 6px 0px 5px' }} >
                        {msgs}
                    </List>
                </Stack>
            </Stack>
        </Box>
    )
}


export default ChatUI