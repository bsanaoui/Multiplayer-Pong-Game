import { Button, FormControl, InputBase, List, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import HeaderChat from './HeaderChat'
import SendIcon from '@mui/icons-material/Send'
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store";
import { addMessage, clearMessages, initMessages } from "../store/chatUiReducer";
import { requestMessages } from '../requests/messages';

let socketclient: Socket;
let index_msg: number = 0;
let prev_room: string = '';

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
    },
}));

// const msgs = Array.from({ length: 9 }, (_, index) => {return ()}
const renderMessage = (current: string, user_name: string, msg: string): JSX.Element => {
    if (current === user_name)
        return (
            <li key={index_msg++} style={{ float: 'right', marginTop: "5px" }}>
                <MessageSent msg={msg} />
            </li>
        );
    else
        return (
            <li key={index_msg++} style={{ float: 'left', marginTop: "5px" }}>
                <MessageRecieved msg={msg} />
            </li>
        );
}

/* Handle Clear msgs when switch room */
const ChatUI = () => {
    const user_conneced = useSelector((state: RootState) => state.user).username; // call-back function
    const chat_state = useSelector((state: RootState) => state.chat);
    const [message_input, setMessage] = useState("");

    const dispatch = useDispatch();

    const currentRoom = chat_state.curr_room;
    const msgs = chat_state.msgs;

    useEffect(() => {
        socketclient = io('http://localhost:3333');
        handleConnection(); // connect to the socket specied room ??

        requestMessages(currentRoom).then((value) => {
            const data = value as Array<{ from: string, to: string, content_msg: string }>;
            dispatch(initMessages(data));
        })

        if (socketclient) {
            socketclient.on('msgToClient', (msg: { name: string, room: string, message: string }) => {
                dispatch(addMessage({ username: msg.name, msg: msg.message, to: currentRoom }));
                console.log(msgs);
            })
        }

        return () => {
            dispatch(clearMessages());
            socketclient.disconnect(); // Check if works
        }
    })

    const handleConnection = () => {
        if (socketclient) {
            socketclient.emit('JoinRoom', { name: user_conneced, room: currentRoom, message: '' });
        }
    }

    const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    // Delete setMsgs 
    const sendMsg = () => {
        if (message_input) {
            socketclient.emit('SendMessageRoom', { name: user_conneced, room: currentRoom, message: message_input });
            console.log(message_input);
            setMessage('');
        }
    }
    const handleEnterkey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            sendMsg();
        }
    }

    // if (prev_room !== currentRoom && currentRoom !== '')
    // {
    //     requestMessages(currentRoom).then((value) => {
    // 		const data = value as Array<{from:string, to:string, content_msg:string}>;
    //         dispatch(initMessages(data));
    // 	})
    //     handleConnection(); // connect to the socket specied room ??
    //     prev_room = currentRoom;
    // }

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
                    <HeaderChat name={currentRoom + " " + user_conneced} />
                </div>
                <Stack spacing={2} direction="column-reverse" sx={{ width: "532px", minHeight: "calc( 100vh - 67px )", margin: 'auto' }}>
                    <Stack direction="row" marginBottom="45px">
                        <FormControl variant="standard">
                            <BootstrapInput placeholder="Write a message ..." id="bootstrap-input"
                                onChange={handleMsgChange}
                                onKeyDown={handleEnterkey}
                                value={message_input} />
                        </FormControl>
                        <div style={{
                            backgroundColor: "#151416", padding: "10px", borderRadius: '0 12px 12px 0',
                        }}>
                            <Button sx={{ backgroundColor: "#3475D7", height: "50px", color: "#FFF" }} onClick={sendMsg}>
                                <SendIcon />
                            </Button>
                        </div>
                    </Stack>
                    <List style={{ overflow: 'auto', padding: '0 6px 0px 5px' }} >
                        {msgs.map((item) => (renderMessage(user_conneced, item.username, item.msg)))}
                    </List>
                </Stack>
            </Stack>
        </Box>
    )
}


export default ChatUI