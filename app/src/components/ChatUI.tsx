import { Button, FormControl, InputBase, List, Stack, styled, TextField } from '@mui/material'
import { Box } from '@mui/system'
import HeaderChat from './HeaderChat'
import SendIcon from '@mui/icons-material/Send'
import MessageSent from './MessageSent';
import MessageRecieved from './MessageRecieved';
import { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { TonalitySharp } from '@mui/icons-material';
import { connected } from 'process';
import LoginPage from './LoginPage';

let socketclient: Socket;;

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

// const msgs = Array.from({ length: 9 }, (_, index) => {
//     return (
//         <div >
//             <div style={{ float: 'right', marginTop: "5px" }}>
//                 <MessageSent msg="Caveat with refs Caveat with refs Caveat with refs" />
//             </div>
//             <div style={{ float: 'left', marginTop: "5px" }}>
//                 <MessageRecieved msg="Hello industry. Lorem Ipsum Dom" />
//             </div>
//             <div style={{ float: 'left', marginTop: "5px" }}>
//                 <MessageRecieved msg="Lorem Ipsum Dom ?" />
//             </div>
//             <div style={{ float: 'right', marginTop: "5px" }}>
//                 <MessageSent msg="See you" />
//             </div>
//         </div>
//     );
// });
const current_user_id: number = 1;  // dynamic handle ????

const initMessages = [
    {
        username: 'bsanaoui',
        id: 1,
        msg: 'Hello'
    }
];

const renderMessage = (id: number, msg: string): JSX.Element => {
    if (current_user_id === id)
        return (
            <MessageSent msg={msg} />
        );
    else
        return (
            <MessageRecieved msg={msg} />
        );
}

const ChatUI = () => {
    const [connected, setConnected] = useState(false);
    const [username, setUserName] = useState("");
    const [connectedUsers, setConnectedUsers] = useState([] as { id: string, username: string }[]);

    useEffect(() => {
        socketclient = io('http://localhost:4000');
        if (socketclient) {
            socketclient.on("username-taken", () => {
                console.error("Username is taken") //toast.error
            });

            socketclient.on("username-submitted-successfully", () => {
                setConnected(true)
            });

            socketclient.on("get-connected-users", (connectedUsers: { id: string, username: string }[]) => {
                setConnectedUsers(connectedUsers.filter(user => user.username !== username));
                console.log(connectedUsers);
            })
        }
    }, [username])

    const handleConnection = () => {
        if (socketclient)
        {
            socketclient.emit("handle-connection", username);
            setConnected(true);
        }
    }

    const [message_input, setMessage] = useState("");
    const [msgs, setMsgs] = useState(initMessages);

    const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    const sendMsg = () => {
        if (message_input) {
            const newMsgs = msgs.concat({ username: 'bsanaoui', id: 1, msg: message_input }); // dynamic handle ????
            setMsgs(newMsgs);
            console.log("message sent");
        }
    }
    const handleEnterkey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13)
            sendMsg();
    }

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
            {!connected && <LoginPage handleConnection={handleConnection} username={username} setUsername={setUserName}/>}
            {connected && <Stack height='inherit'>
                    <div>
                        <HeaderChat name={username} />
                    </div>
                    <Stack spacing={2} direction="column-reverse" sx={{ width: "532px", minHeight: "calc( 100vh - 67px )", margin: 'auto' }}>
                        <Stack direction="row" marginBottom="45px">
                            <FormControl variant="standard">
                                <BootstrapInput placeholder="Write a message ..." id="bootstrap-input" onChange={handleMsgChange} onKeyDown={handleEnterkey} />
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
                            {/* {msgs} */}
                            {msgs.map((item) => (
                                <div style={{ float: 'right', marginTop: "5px" }}>
                                    {renderMessage(item.id, item.msg)}
                                </div>
                            ))}
                        </List>
                    </Stack>
                </Stack>
            }
        </Box>
    )
}


export default ChatUI