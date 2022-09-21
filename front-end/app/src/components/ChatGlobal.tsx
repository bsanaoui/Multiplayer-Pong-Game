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
import { initSocketClient, disconnectSocket } from "../store/socketReducer";
import { io, Socket } from "socket.io-client";
import { SocketContext, SocketContextType } from "../context/socket";

export function joinRoom(curr_user: string, curr_room: string, socketclient: Socket): Socket {
	if ((!socketclient || socketclient.disconnected) && curr_room !== '') {
		socketclient = io(process.env.REACT_APP_SERVER_IP as string, {
			auth: {
				room: curr_room,
				user: curr_user,
			}
		});
	}
	if (socketclient)
		socketclient.emit('JoinRoom');
	return (socketclient);
}

export function joinDmRoom(curr_user: string, curr_conv: string, socketclient: Socket): Socket {
	if ((!socketclient || socketclient.disconnected) && curr_conv !== '') {
		socketclient = io(process.env.REACT_APP_SERVER_IP as string, {
			auth: {
				from: curr_user,
				to: curr_conv,
			}
		});
	}
	if (socketclient)
		socketclient.emit('join_dm_room');
	return (socketclient);
}

const ChatGlobal = () => {
	const logged_user = useSelector((state: RootState) => state.user).login;
	const currentRoom = useSelector((state: RootState) => state.chat).curr_room;
	const currentConv = useSelector((state: RootState) => state.chat).curr_converation;
	const currentPage = useSelector((state: RootState) => state.interfaces).current;

	const { socket, updateSocket } = useContext(SocketContext) as SocketContextType;

	useEffect(() => {
		console.log("Global :" + currentRoom);
		if (currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends))
			updateSocket(joinDmRoom(logged_user, currentConv, socket));
		else
			updateSocket(joinRoom(logged_user, currentRoom, socket));
		console.log("Leave");
		return () => {
			if (socket)
				socket.disconnect();
		}
	}, [currentRoom])

	return (
		<Stack direction="row" height="100vh" >
			{currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends) ? <Friends /> : <Rooms />}
			{currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends) ? <UsersMessaging /> : <UsersRoom />}
			{currentPage === (InterfaceEnum.InstantMessaging || InterfaceEnum.Friends) ? <ChatUIFriend /> : <ChatUIRoom />}
		</Stack>
	)
}

export default ChatGlobal