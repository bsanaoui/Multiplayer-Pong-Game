
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiNavbar from './components/MuiNavbar';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Friends from './components/Friends';
import Friend from './components/Friend';
import Room_ from './components/RoomButtonChat';
import ChatUI from './components/ChatUIRoom';
import Rooms from './components/Rooms';
import ChatGlobal from './components/ChatGlobal';
import { useSelector } from 'react-redux';
import { RootState } from "./store";

import LoginPage from './components/LoginPage';
import RoomButtonChat from './components/RoomButtonChat';

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
					<ChatGlobal />
					{/* <RoomButtonChat name='Room 2C.X'/> */}
					{/* <Friend name='Jocky Ball'/> */}
				</div>
			}
		</ThemeProvider>
	);
}

export default App;
