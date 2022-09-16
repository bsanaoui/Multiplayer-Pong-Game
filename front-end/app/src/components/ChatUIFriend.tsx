import { Button, FormControl, InputBase, List, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import HeaderChat from './HeaderChat'
import SendIcon from '@mui/icons-material/Send'
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';
import { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store";
import { addMessage, clearMessages, initMessages } from "../store/chatUiReducer";
import { requestDirectMsgs } from '../requests/messages';


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
        fontSize: 13,
        width: '440px',
        height: '45px',
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
            <li key={index_msg++} style={{ float: 'right'}}>
                <MessageSent msg={msg} />
            </li>
        );
    else
        return (
            <li key={index_msg++} style={{ float: 'left'}}>
                <MessageRecieved msg={msg} />
            </li>
        );
}

/* Handle Clear msgs when switch room */
const ChatUIFriend = () => {
    const bottomRef = useRef<null | HTMLDivElement>(null); // To auto scroll to bottom of window
    const dispatch = useDispatch();

    const user_conneced = useSelector((state: RootState) => state.user).username; // call-back function
    const chat_state = useSelector((state: RootState) => state.chat);
    const [message_input, setMessage] = useState("");

    const currentConvr = chat_state.curr_converation;
    const msgs = chat_state.msgs;

    useEffect(() => {
        socketclient = io('http://localhost:3333');
        handleConnection();
        requestDirectMsgs(user_conneced, currentConvr).then((value) => {
            const data = value as Array<{ from: string; to: string; content_msg: string }>;
            dispatch(initMessages(data));
        })

        if (socketclient) {
            socketclient.on('msgToClient_dm', (m: { from: string, to: string, msg: string }) => {
                console.log(m);
                dispatch(addMessage({ username: m.from, to: m.to, msg: m.msg }));
                // {from :   , msg :}
            })
        }

        if (bottomRef) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        return () => {
            dispatch(clearMessages());
            socketclient.disconnect(); // Check if works
        }
    }, [currentConvr])

    const handleConnection = () => {
        if (socketclient) {
            socketclient.emit('check_room', { from: user_conneced, to: currentConvr, msg: '' });
            // {to : }
        }
    }

    const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    // Delete setMsgs 
    const sendMsg = () => {
        if (message_input) {
            socketclient.emit('dm_message', { from: user_conneced, to: currentConvr, msg: message_input });
            //{ to :    , msg :}
            setMessage('');
        }
    }
    const handleEnterkey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            sendMsg();
        }
    }

    // if (prev_room !== currentConvr && currentConvr !== '')
    // {
    //     requestDirectMsgs(user_conneced ,currentConvr).then((value) => {

    // 		const data = value as Array< { from: string; to: string; content_msg: string }>;
    //         dispatch(initMessages(data));
    // 	})
    //     handleConnection(); // connect to the socket specied room ??
    //     prev_room = currentConvr;
    // }

    return (
        <Box
            bgcolor="#202541"
            sx={{
                backgroundColor: "#202541",
                width: "510px",
                height: '100vh',
                paddingLeft: "22px",
                paddingRight: "22px",
                borderLeft: "1px solid #FFFFFF"
            }}>
            <Stack height='inherit'>
                <div>
                    <HeaderChat name={currentConvr + " " + user_conneced} />
                </div>
                <Stack spacing={2.7} direction="column-reverse" sx={{ width:"100%", minHeight: "calc( 100vh - 67px )", margin: 'auto' }}>
                    <Stack direction="row" marginBottom="35px">
                        <FormControl variant="standard">
                            <BootstrapInput placeholder="Write a message ..." id="bootstrap-input"
                                onChange={handleMsgChange}
                                onKeyDown={handleEnterkey}
                                value={message_input} />
                        </FormControl>
                        <div style={{
                            backgroundColor: "#151416", padding: "10px", borderRadius: '0 10px 10px 0',
                        }}>
                            <Button sx={{ backgroundColor: "#3475D7", height: "45px", color: "#FFF" }} onClick={sendMsg}>
                                <SendIcon />
                            </Button>
                        </div>
                    </Stack>
                    <List style={{ overflowY: 'auto' }} >
                        {msgs.map((item) => (renderMessage(user_conneced, item.username, item.msg)))}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsmLurom ipsmLurom ipsmLurom ipsm ")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm")}
                        {renderMessage(user_conneced, user_conneced, "Hello")}
                        {renderMessage(user_conneced, "CTOO2", "Lurom ipsm Lurom ipsmLurom ipsmLurom ipsm")}
                        <li key={index_msg++} style={{ float: 'right'}}>
                            <div ref={bottomRef} ></div>
                        </li>
                    </List>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ChatUIFriend