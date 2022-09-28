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
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { io, Socket } from "socket.io-client";
import { changeCurrRoom } from "../store/chatUiReducer";
import { initSocketClient } from "../store/socketReducer";


const ChatGlobal = () => {
	const logged_user = useSelector((state: RootState) => state.user).login;
	const currentPage = useSelector((state: RootState) => state.interfaces).current;
	// const currentRoom = useSelector((state: RootState) => state.chat).curr_room;
	// const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
	const socket = useSelector((state: RootState) => state.socketclient).socket;
	const dispatch = useDispatch();

	console.log("Global ChatUI")

	useEffect(() => {

		if (currentPage === InterfaceEnum.ChatRoom || currentPage === InterfaceEnum.Friends
			|| currentPage === InterfaceEnum.InstantMessaging)
			dispatch(initSocketClient({ host: process.env.REACT_APP_SERVER_IP as string, user: logged_user }));
	
		return (() => {
			console.log("Socket Disconnected");
			socket.disconnect();
		})
	},[currentPage]);

	return (
		<Stack direction="row" alignItems="center" justifyContent="flex-end" height="100%" width="100%">
			{(currentPage === InterfaceEnum.InstantMessaging) || (currentPage === InterfaceEnum.Friends) ? <Friends /> : <Rooms />}
			{(currentPage === InterfaceEnum.InstantMessaging) || (currentPage === InterfaceEnum.Friends) ? <UsersMessaging /> : <UsersRoom />}
			{(currentPage === InterfaceEnum.InstantMessaging) || (currentPage === InterfaceEnum.Friends) ? <ChatUIFriend /> : <ChatUIRoom />}
		</Stack>
	)
}

export default ChatGlobal