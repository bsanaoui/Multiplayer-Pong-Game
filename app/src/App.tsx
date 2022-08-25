
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
import Room_ from './components/RoomButtonChat';
import ChatUI from './components/ChatUI';
import Rooms from './components/Rooms';
import { Stack } from '@mui/material';
import ChatGlobal from './components/ChatGlobal';
import CustomizedDialog from './components/CustomizedDialog';
import FormNewRoom from './components/FormNewRoom';

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
			{/* <MuiNavbar></MuiNavbar>
			<Main></Main> */}
			<ChatGlobal/>
			{/* <CustomizedDialog>
				<FormNewRoom />
			</CustomizedDialog> */}
		</ThemeProvider >
	);
}

//******************* Temp Data ********************** //
const msg: string = "Hello industry. Lorem Ipsum Dom";

export default App;
