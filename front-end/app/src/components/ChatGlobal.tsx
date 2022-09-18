import { Stack } from "@mui/material"
import ChatUIRoom from "./ChatUIRoom"
import Friends from "./Friends"
import { useSelector } from "react-redux"
import { RootState } from "../store";

import Rooms from "./Rooms"
import ChatUIFriend from "./ChatUIFriend"
import { UsersRoom } from "./UsersRoom"
import { UsersMessaging } from "./UsersMessaging"
import { InterfaceEnum } from "../store/interfacesReducer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initSocketClient, disconnectSocket } from "../store/socketReducer";
import { io, Socket } from "socket.io-client";


const ChatGlobal = () => {
    const currentPage = useSelector((state: RootState) => state.interfaces).current;

    return (
        <Stack direction="row" height="100vh" >
            {currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends) ? <Friends /> : <Rooms />}
            {currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends) ? <UsersMessaging /> : <UsersRoom />}
            {currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends) ? <ChatUIFriend /> : <ChatUIRoom />}
        </Stack>
    )
}

export default ChatGlobal