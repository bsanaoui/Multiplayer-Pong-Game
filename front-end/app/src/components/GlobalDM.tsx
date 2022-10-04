import { Stack } from "@mui/material"
import Friends from "./Friends"
import { useSelector } from "react-redux"
import { RootState } from "../store";

import Rooms from "./Rooms"
import { ChatUiInstantMsg } from "./ChatUiInstantMsg"
import { UsersRoom } from "./UsersRoom"
import { UsersMessaging } from "./UsersMessaging"
import { InterfaceEnum } from "../store/interfacesReducer"
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { io, Socket } from "socket.io-client";
import { changeCurrRoom } from "../store/chatUiReducer";
import { initSocketClient } from "../store/socketReducer";
import { ChatUIRoomMsg } from "./ChatUIRoomMsg";


const GlobalDM = () => {
	const logged_user = useSelector((state: RootState) => state.user).login;
	// const currentPage = useSelector((state: RootState) => state.interfaces).current;
	const socket = useSelector((state: RootState) => state.socketclient).socket;
	const dispatch = useDispatch();

	console.log("Global DM")

	// useEffect(() => {

	// 	// if (currentPage === InterfaceEnum.Friends
	// 	// 	|| currentPage === InterfaceEnum.InstantMessaging)
	// 		dispatch(initSocketClient({ host: process.env.REACT_APP_SERVER_IP as string, user: logged_user }));			

	// 	return (() => {
	// 		console.log("Socket Disconnected Global DM");
	// 		socket.disconnect();
	// 	})

	// }, []);

	return (
		<Stack direction="row" alignItems="center" justifyContent="flex-end" height="100%" width="100%">
			<Friends />
			<UsersMessaging />
			<ChatUiInstantMsg />
		</Stack>
	)
}

export default GlobalDM