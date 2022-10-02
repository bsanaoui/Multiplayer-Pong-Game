
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


import { ThemeProvider, createTheme, Shadows } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { RootState } from "./store";

import LoginPage from './components/LoginPage';
import { NavBarNew } from './components/NavBarNew';
import { Box, CircularProgress, Stack } from '@mui/material';
import { InterfaceEnum } from './store/interfacesReducer';
import { InvitationFriend } from './components/InvitationFriend&Game/InvitationFriend';
import { InvitationsMenu } from './components/InvitationsMenu';
import InvitePlayBar from './components/InvitePlayBar';
import MessageSent from './components/MessageSent';
import MessageRecieved from './components/MessageRecieved';
import Rooms from './components/Rooms';
import { UsersRoom } from './components/UsersRoom';
import Friends from './components/Friends';
import { useDispatch } from 'react-redux';
import { clearUser, initUser } from './store/userReducer';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import RoomButtonChat from './components/RoomButtonChat';
import SocketProvider, { socket, SocketContext } from './context/socket';
import { ModeGameButton } from './components/Game/ModeGameButton';
import { ModesInput } from './components/Game/ModesInput';
import ModeDialog from './components/Game/ModeDialog';
import { HandleOpeneDialog } from './store/gameReducer';
import Canvas from './components/canvas';
import { initSocketClient } from './store/socketReducer';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},

	typography: {
		fontFamily: [
			"Lexend",
			"sans-serif"
		].join(",")
	},
});

const Home = React.lazy(() => import('./components/Home'));
const DashboardUser = React.lazy(() => import('./components/Profile/DashboardUser'));
const ChatRoom = React.lazy(() => import('./components/GlobalRooms'));
const InstantMessaging = React.lazy(() => import('./components/GlobalDM'));
const Matchmaking = React.lazy(() => import('./components/Game'));
const LiveMatchs = React.lazy(() => import('./components/LiveMatchs'));
const Login = React.lazy(() => import('./components/LoginPage'));
const Loading = () => <Box margin="auto"><CircularProgress /><p>Loading ...</p></Box>;


function App() {
	const dispatch = useDispatch();
	const logged_user = useSelector((state: RootState) => state.user).login;
	const currentIterface = useSelector((state: RootState) => state.interfaces).current;
	const [cookies, setCookie, removeCookie] = useCookies();

	useEffect(() => {
		if (cookies.Authorization) {
			dispatch(initUser({ login: cookies.login, username: cookies.username, avatar: cookies.avatar }));
			console.log("User token: " + cookies.Authorization);
		}
		dispatch(HandleOpeneDialog()) ///// debug Mode Game
	}, []);

	useEffect(() => {
		if (currentIterface === InterfaceEnum.Logout) {
			removeCookie("login"); removeCookie("username"); removeCookie("avatar"); removeCookie("Authorization");
			dispatch(clearUser());
		}
	}, [currentIterface])


	return (
		<ThemeProvider theme={darkTheme}>
			<ToastContainer position="top-right" newestOnTop autoClose={3500} />
			<CssBaseline />
			{/* {logged_user === '' && <LoginPage />} */}
			{logged_user === '' &&
				<Stack direction="row" width="100%" height="100%"
					sx={{ backgroundColor: "#202541" }}>
					<NavBarNew />
					{/* {currentIterface === InterfaceEnum.Home && <Home />}
						{currentIterface === InterfaceEnum.Dashboard && <DashboardUser />}
						{currentIterfaˇce === InterfaceEnum.ChatRoom && <GlobalRooms />}
						{currentIterface === InterfaceEnum.InstantMessaging && <GlobalDM />}
						{currentIterface === InterfaceEnum.Matchmaking && <Game/>}
						{currentIterface === InterfaceEnum.LiveGames && <LiveMatchs />} */}
					<React.Suspense fallback={<Loading />}>
						<Routes>
							<Route path='/' element={<Home/>}/>
							<Route path='/dashboard' element={<DashboardUser/>}/>
							<Route path='/chatRoom' element={<ChatRoom/>}/>
							<Route path='/instantMessaging' element={<InstantMessaging/>}/>
							<Route path='/matchmaking' element={<Matchmaking/>}/>
							<Route path='/liveMatchs' element={<LiveMatchs/>}/>
							<Route path='/login' element={<Login/>}/>
						</Routes>
					</React.Suspense>
				</Stack>
			}
		</ThemeProvider>
	);
}

// function 
//Snackbar MUI to handle Invite Play
export default App;  