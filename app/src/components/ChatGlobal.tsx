import { IconButton, Stack, Typography } from "@mui/material"
import ChatUI from "./ChatUI"
import Friends from "./Friends"
import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/group.png'
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { actionCreators, State } from "../state"
import Rooms from "./Rooms"


const ChatGlobal = () => {
    const is_friends = useSelector((state: State) => state.chat); // call-back function
    return (
        <Stack direction="row" height="100vh" >
            <Stack sx={{ height: "100%", backgroundColor: "#262948" }}>
                <div style={{ margin: 'auto' }}>
                    <CustomButton _name="Chat Room" />
                    <CustomButton _name="Instant Messaging" />
                </div>
            </Stack>
            {is_friends ? <Friends /> : <Rooms />}
            <ChatUI />
        </Stack>
    )
}

interface ButtonProps {
    _name: string,
}

const CustomButton = ({ _name, }: ButtonProps) => {
    const is_friends = useSelector((state: State) => state.chat); // call-back function
    const dispatch = useDispatch();
    const { changeStatusFriends } = bindActionCreators(actionCreators, dispatch);


    let custom_icon = (_name.charAt(0) === 'I') ? messengerIcon : roomIcon;
    let backgroundButton = (((_name.charAt(0) === 'I') && is_friends) ||
        (_name.charAt(0) !== 'I') && !is_friends) ? "#3F4478" : "#282948";
    return (
        <div className="center-button" style={{ backgroundColor: backgroundButton }}
            onClick={() => { _name === "Chat Room" ? changeStatusFriends(false) : changeStatusFriends(true) }}>
            <Stack spacing={2} direction="row" sx={{
                width: "300px", padding: "3px"
            }}>
                <IconButton>
                    <img src={custom_icon} width="24px" alt="IconChat" />
                </IconButton>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '22px',
                        lineHeight: '109.52%',
                    }}>
                        {_name}
                    </Typography>
                </div>
            </Stack>
        </div>
    )
}
export default ChatGlobal