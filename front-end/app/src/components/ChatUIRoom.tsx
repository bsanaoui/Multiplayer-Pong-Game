import { Button, FormControl, InputBase, List, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import HeaderChat from './HeaderChat'
import SendIcon from '@mui/icons-material/Send'
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store";
import { addMessage, clearMessages, initMessages, MessageState } from "../store/chatUiReducer";
import { requestMessages } from '../requests/messages';

let index_msg: number = 0;

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
const renderMessage = (current: string, from: string, msg: string): JSX.Element => {
    if (current === from)
        return (
            <li key={index_msg++} style={{ float: 'right' }}>
                <MessageSent msg={msg} />
            </li>
        );
    else
        return (
            <li key={index_msg++} style={{ float: 'left' }}>
                <MessageRecieved msg={msg} />
            </li>
        );
}

/* Handle Clear msgs when switch room */
const ChatUIRoom = () => {
    const bottomRef = useRef<null | HTMLDivElement>(null); // To auto scroll to bottom of window
    const logged_user = useSelector((state: RootState) => state.user).login; // call-back function
    const chat_state = useSelector((state: RootState) => state.chat);
    const [message_input, setMessage] = useState("");
    const socketclient = useSelector((state: RootState) => state.socketclient).socket;

    const dispatch = useDispatch();

    const currentRoom = chat_state.curr_room;
    const msgs = chat_state.msgs;

    useEffect(() => {
        handleConnection(); // connect to the socket specied room ??
        requestMessages(currentRoom).then((value) => {
            const data = value as Array<MessageState>;
            dispatch(initMessages(data));
        })

        if (socketclient) {
            socketclient.on('msgToClient', (msg: MessageState) => {
                dispatch(addMessage(msg));
                console.log(msgs);
            })
        }

        if (bottomRef) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        return () => {
            dispatch(clearMessages());
        }

    }, [currentRoom])

    const handleConnection = () => {
        if (socketclient) {
            socketclient.emit('JoinRoom');
        }
    }

    const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    // Delete setMsgs 
    const sendMsg = () => {
        if (message_input) {
            socketclient.emit('SendMessageRoom', { msg: message_input });
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
                width: "510px",
                height: '100vh',
                // height: 'calc( 100vh - 67px )',
                paddingLeft: "22px",
                paddingRight: "20px",
                borderLeft: "1px solid #FFFFFF"
            }}>
            <Stack height='inherit'>
                <div>
                    <HeaderChat name={currentRoom + " " + logged_user} />
                </div>
                <Stack spacing={2} direction="column-reverse" sx={{ width: "100%", minHeight: "calc( 100vh - 67px )", margin: 'auto' }}>
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
                    <List style={{ overflow: 'auto' }} >
                        {msgs.map((item) => (renderMessage(logged_user, item.from, item.msg)))}
                        <li key={index_msg++} style={{ float: 'right' }}>
                            <div ref={bottomRef} ></div>
                        </li>
                    </List>
                </Stack>
            </Stack>
        </Box>
    )
}


export default ChatUIRoom