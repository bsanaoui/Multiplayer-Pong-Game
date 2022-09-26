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
import { SocketContext, SocketContextType } from "../context/socket";
import { changeCurrRoom } from "../store/chatUiReducer";


const ChatGlobal = () => {
	const logged_user = useSelector((state: RootState) => state.user).login;
	const currentPage = useSelector((state: RootState) => state.interfaces).current;
	// const currentRoom = useSelector((state: RootState) => state.chat).curr_room;
	// const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
	let { socket, updateSocket } = useContext(SocketContext) as SocketContextType;


	const initSocket = () => {
		if (!socket || socket.disconnected) {
			socket = io(process.env.REACT_APP_SERVER_IP as string, {
				auth: {
					from: logged_user,
				}
			});
		}
		updateSocket(socket);
	}

	useEffect(() => {

		initSocket();
		return () => {
			if (socket)
				socket.disconnect();
		}
	}, [currentPage])

	return (
		<Stack direction="row" height="100vh" >
			{(currentPage === InterfaceEnum.InstantMessaging) || (currentPage === InterfaceEnum.Friends) ? <Friends /> : <Rooms />}
			{(currentPage === InterfaceEnum.InstantMessaging) || (currentPage === InterfaceEnum.Friends) ? <UsersMessaging /> : <UsersRoom />}
			{(currentPage === InterfaceEnum.InstantMessaging) || (currentPage === InterfaceEnum.Friends) ? <ChatUIFriend /> : <ChatUIRoom />}
		</Stack>
	)
}

export default ChatGlobal