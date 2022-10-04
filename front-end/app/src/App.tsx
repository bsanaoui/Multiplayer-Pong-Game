
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
import { ModeGameButton } from './components/Game/ModeGameButton';
import { ModesInput } from './components/Game/ModesInput';
import ModeDialog from './components/Game/ModeDialog';
import { HandleOpeneDialog } from './store/gameReducer';
import Canvas from './components/canvas';
import { initSocketClient } from './store/socketReducer';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { handleToastGame } from './components/InfoMessages/Toast';
import { emit } from 'process';
import { P_data } from './components/DropMenus/DropMenuUser';

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
const SignUp = React.lazy(() => import('./components/SignUp'));
const SignInTFA = React.lazy(() => import('./components/SignInTFA'));
const Loading = () => <Box margin="auto"><CircularProgress /><p>Loading ...</p></Box>;


function App() {
	const dispatch = useDispatch();
	const logged_user = useSelector((state: RootState) => state.user).login;
	const currentIterface = useSelector((state: RootState) => state.interfaces).current;
	const [cookies, setCookie, removeCookie] = useCookies();
	const location = useLocation();
	const navigate = useNavigate();
	const socket = useSelector((state: RootState) => state.socketclient).socket;

	// const handleListenerGame = () => {
	// 	socket.on('gameInvite', (data: { user: P_data, mod: number }) => {
	// 		handleToastGame(data);
	// 	})
	// }

	// useEffect(() => {
	// 	if (socket)
	// 		handleListenerGame();
	// 	return (() => {
	// 		socket.off("gameInvite");
	// 	})
	// },)

	// useEffect(() => {
	// 	dispatch(initSocketClient({ host: process.env.REACT_APP_SERVER_IP as string, user: logged_user }));

	// 	return (() => {
	// 		console.log("Socket Disconnected Global App");
	// 		socket.disconnect();
	// 	})

	// }, []);

	useEffect(() => {
		if (cookies.Authorization) {
			dispatch(initUser({ login: cookies.login, username: cookies.username, avatar: cookies.avatar }));
			console.log("User token: " + cookies.Authorization);
			if (location.pathname === '/' || location.pathname === '/tfa'|| location.pathname === '/signUp' )
				navigate("/home");
		}
		
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
			<Stack direction="row" width="100%" height="100%"
				sx={{ backgroundColor: "#202541" }}>
				<React.Suspense fallback={<Loading />}>
					{(logged_user !== '' && location.pathname !== '/' && location.pathname !== '/signUp'
						&& location.pathname !== '/tfa') && <NavBarNew />}  {/*Check if route not signin and signup*/}

					{/* {currentIterface === InterfaceEnum.Home && <Home />}
						{currentIterface === InterfaceEnum.Dashboard && <DashboardUser />}
						{currentIterfaˇce === InterfaceEnum.ChatRoom && <GlobalRooms />}
						{currentIterface === InterfaceEnum.InstantMessaging && <GlobalDM />}
						{currentIterface === InterfaceEnum.Matchmaking && <Game/>}
						{currentIterface === InterfaceEnum.LiveGames && <LiveMatchs />} */}

					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/signUp' element={<SignUp />} />
						<Route path='/tfa' element={<SignInTFA />} />
						<Route path='/home' element={<Home />} />
						<Route path='/dashboard' element={<DashboardUser />} />
						<Route path='/chatRoom' element={<ChatRoom />} />
						<Route path='/instantMessaging' element={<InstantMessaging />} />
						<Route path='/matchmaking' element={<Matchmaking />} />
						<Route path='/liveMatchs' element={<LiveMatchs />} />
					</Routes>
				</React.Suspense>
			</Stack>

		</ThemeProvider >
	);
}

// function 
//Snackbar MUI to handle Invite Play
export default App;  