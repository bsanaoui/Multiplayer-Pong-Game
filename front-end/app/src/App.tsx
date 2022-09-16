
import './App.css';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ChatGlobal from './components/ChatGlobal';
import { useSelector } from 'react-redux';
import { RootState } from "./store";

import LoginPage from './components/LoginPage';
import { NavBarNew } from './components/NavBarNew';
import { Box, Stack } from '@mui/material';
import { LiveMatchs } from './components/LiveMatchs';
import { DashboardUser } from './components/DashboardUser';
import { InterfaceEnum } from './store/interfacesReducer';
import { InvitationFriend } from './components/InvitationFriend&Game/InvitationFriend';
import { InvitationsMenu } from './components/InvitationsMenu';
import InvitePlayBar from './components/InvitePlayBar';
import ChatUIFriend from './components/ChatUIFriend';
import MessageSent from './components/MessageSent';
import MessageRecieved from './components/MessageRecieved';
import Rooms from './components/Rooms';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},

	typography: {
		fontFamily: [
			"Lexend",
			"sans-serif"
		].join(",")
	}
});

function App() {
	const currentuser = useSelector((state: RootState) => state.user).username; 
	const currentIterface = useSelector((state: RootState) => state.interfaces).current

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{currentuser === '' && <LoginPage />}
			{currentuser !== '' &&
				<Stack direction="row"
					sx={{backgroundColor:"#202541", width:"100%", height:"100%"}}>
					<NavBarNew />
					{currentIterface === InterfaceEnum.Home && <Main/>}
					{currentIterface === InterfaceEnum.Dashboard && <DashboardUser/>}
					{currentIterface === InterfaceEnum.ChatRoom && <ChatGlobal/>}
					{currentIterface === InterfaceEnum.InstantMessaging && <ChatGlobal/>}
					{currentIterface === InterfaceEnum.Friends && <ChatGlobal/>}
					{currentIterface === InterfaceEnum.Matchmaking && <Box/>}
					{currentIterface === InterfaceEnum.LiveGames && <LiveMatchs/>}
				</Stack> 
			}
			{/* <InvitePlayBar/> */}
			{/* <Rooms/> */}
		</ThemeProvider>
	);
}
//Snackbar MUI to handle Invite Play
export default App;