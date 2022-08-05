import { AppBar, Toolbar, IconButton} from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const MuiNavbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <SportsEsportsIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar