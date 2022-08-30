
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiNavbar from './components/MuiNavbar';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Friends from './components/Friends';
import Friend from './components/Friend';
import Room_ from './components/RoomButtonChat';
import ChatUI from './components/ChatUI';
import Rooms from './components/Rooms';
import ChatGlobal from './components/ChatGlobal';
import { useSelector } from 'react-redux';
import { RootState } from "./store";

import LoginPage from './components/LoginPage';

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
			{currentuser === '' && <LoginPage />}
			{currentuser !== '' &&
				<div>
					{/* <MuiNavbar></MuiNavbar>
					<Main></Main> */}
					<ChatGlobal />
				</div>
			}
		</ThemeProvider >
	);
}

//******************* Temp Data ********************** //
const msg: string = "Hello industry. Lorem Ipsum Dom";

export default App;
