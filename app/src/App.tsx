
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiNavbar from './components/MuiNavbar';
import Main from './components/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
      {/* <MuiNavbar></MuiNavbar> */}
      <Main></Main>
    </ThemeProvider>
  );
}

export default App;
