
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiNavbar from './components/MuiNavbar';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MessageRecieved from './components/MessageRecieved';
import MessageSent from './components/MessageSent';
import Friends from './components/Friends';
import Friend from './components/Friend';
import Room_ from './components/Room_';
import ChatUI from './components/ChatUI';
import Rooms from './components/Rooms';
import { Stack } from '@mui/material';
import ChatGlobal from './components/ChatGlobal';

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
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{/* <MuiNavbar></MuiNavbar> */}
			{/* <Main></Main> */}
			<ChatGlobal/>
			{/* <Rooms/> */}
		</ThemeProvider >
	);
}

//******************* Temp Data ********************** //
const msg: string = "Hello industry. Lorem Ipsum Dom";

export default App;
