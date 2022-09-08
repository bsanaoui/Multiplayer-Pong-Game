import { IconButton, Stack, Typography } from "@mui/material"
import ChatUIRoom from "./ChatUIRoom"
import Friends from "./Friends"
import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/chat-room.png'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { changeStatusFriends, clearMessages } from "../store/chatUiReducer";

import Rooms from "./Rooms"
import ChatUIFriend from "./ChatUIFriend"
import { UsersRoom } from "./UsersRoom"
import { UsersMessaging } from "./UsersMessaging"


const ChatGlobal = () => {
    const is_friends = useSelector((state: RootState) => state.chat).is_friend; // call-back function
    return (
        <Stack direction="row" height="100vh" >
            <Stack sx={{ height: "100%", backgroundColor: "#262948" }}>
                <div style={{ margin: 'auto' }}>
                    <CustomButton _name="Chat Room" />
                    <CustomButton _name="Instant Messaging" />
                </div>
            </Stack>
            {is_friends ? <Friends /> : <Rooms />}
            {is_friends ? <UsersMessaging /> : <UsersRoom />}
            {is_friends ? <ChatUIFriend /> : <ChatUIRoom />}
        </Stack>
    )
}


interface ButtonProps {
    _name: string,
}

export const CustomButton = ({ _name, }: ButtonProps) => {
    const is_friends = useSelector((state: RootState) => state.chat).is_friend; // call-back function
    const dispatch = useDispatch();

    let custom_icon = (_name.charAt(0) === 'I') ? messengerIcon : roomIcon;
    let backgroundButton = (((_name.charAt(0) === 'I') && is_friends) ||
        (_name.charAt(0) !== 'I') && !is_friends) ? "#3F4478" : "#282948";
    return (
        <div className="center-button" style={{ backgroundColor: backgroundButton }}
            onClick={() => {
                _name === "Chat Room" ? dispatch(changeStatusFriends(false)) : dispatch(changeStatusFriends(true));
                dispatch(clearMessages())
            }}>
            <Stack spacing={2} direction="row" sx={{
                width: "220px", padding: "3px"
            }}>
                <IconButton>
                    <img src={custom_icon} width="24px" alt="IconChat" />
                </IconButton>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '16px',
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