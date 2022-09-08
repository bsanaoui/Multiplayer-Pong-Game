
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiNavbar from './components/MuiNavbar';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Friends from './components/Friends';
import Room_ from './components/RoomButtonChat';
import ChatUI from './components/ChatUIRoom';
import Rooms from './components/Rooms';
import ChatGlobal from './components/ChatGlobal';
import { useSelector } from 'react-redux';
import { RootState } from "./store";

import LoginPage from './components/LoginPage';
import RoomButtonChat from './components/RoomButtonChat';
import LiveMatchBtn, { AvatarPlayer } from './components/LiveMatchBtn';
import avatar1 from './assets/man.png';
import StatElementBar from './components/Profile/StatElementBar';
import UserNameElement from './components/Profile/UserNameElement';
import AvatarProfile from './components/Profile/AvatarProfile';
import StatSegment from './components/Profile/StatSegment';
import AchievementElement from './components/Profile/AchievementElement';
import PlayerTable from './components/Profile/PlayerTable';
import { MatchHistory } from './components/Profile/MatchHistory';
import ScoreTable from './components/Profile/ScoreTable';
import MessageSent from './components/MessageSent';
import MessageRecieved from './components/MessageRecieved';

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
	const currentuser = useSelector((state: RootState) => state.user).username; // call-back function

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{/* {currentuser === '' && <LoginPage />} */}
			{currentuser === '' &&
				<div>
					{/* <MuiNavbar></MuiNavbar> */}
					{/* <Main></Main>  */}
					{/* <ChatGlobal /> */}
					{/* <MatchHistory /> */}
					<LoginPage/>
				</div>
			}
		</ThemeProvider>
	);
}

export default App;