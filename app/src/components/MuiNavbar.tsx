import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Badge, Avatar } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountCircle from '@mui/icons-material/AccountCircle';
import customAvatar from '../assets/man.png'


const MuiNavbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="logo">
					<SportsEsportsIcon />
				</IconButton>
				<Typography variant="h6" component='div' sx={{ flexGrow: 1 }} fontWeight="bold">
					PONG GAME ONLINE
				</Typography>
				<Stack direction='row' spacing={2}>
					<Button color="inherit">Matchmaking</Button>
					<Button color="inherit">Live Games</Button>
					<Button color="inherit">Friends</Button>
					<Button color="inherit">Rooms</Button>
					<Button color="inherit">Chat</Button>
					<Button color="inherit">Profile</Button>
					<IconButton
						size="large"
						aria-label="show 9 new notifications"
						color="inherit"
					>
						<Badge badgeContent={9} color="error">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					{/* <Typography>
						<Typography variant="h6" component='div'>Bsanaoui</Typography>
						<Typography variant="body2">My Account</Typography>
					</Typography> */}
					<Avatar src={customAvatar} />
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default MuiNavbar