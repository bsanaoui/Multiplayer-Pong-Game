
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
			{currentuser  === '' && <LoginPage/>}
			{/* <MuiNavbar></MuiNavbar>
			<Main></Main> */}
			{currentuser !== '' && <ChatGlobal/>}
			{/* <CustomizedDialog>
				<FormNewRoom />
			</CustomizedDialog> */}
		</ThemeProvider >
	);
}

//******************* Temp Data ********************** //
const msg: string = "Hello industry. Lorem Ipsum Dom";

export default App;
