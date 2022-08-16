
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiNavbar from './components/MuiNavbar';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MessageRecieved from './components/MessageRecieved';
import MessageSent from './components/MessageSent';
import Friends from './components/Friend';
import Friend from './components/Friend';
import { Room } from '@mui/icons-material';
import Room_ from './components/Room_';
import ChatUI from './components/ChatUI';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },

  typography: {
    fontFamily: [
      "Lexer",
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
     <ChatUI/>
    </ThemeProvider>
  );
}

//******************* Temp Data ********************** //
const msg: string = "Hello industry. Lorem Ipsum Dom";

export default App;
