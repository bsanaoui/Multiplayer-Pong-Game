import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HttpsIcon from '@mui/icons-material/Https';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import playIcon from '../../assets/DropMenus/play.png'
import addFriendIcon from '../../assets/notification.png'
import profileIcon from '../../assets/DropMenus/profile.png'
import chatIcon from '../../assets/DropMenus/chat.png'
import muteIcon from '../../assets/DropMenus/mute.png'
import banIcon from '../../assets/DropMenus/ban.png'
import seAdminIcon from '../../assets/DropMenus/admin.png'
import { UserOfRoom } from '../../store/roomUsersReducer';
import { Socket } from 'socket.io-client';

// !!!!!!!! ADD listener ????????????
function muteUser(socket: Socket, user: string) {
	if (socket) {
		socket.emit('tjrj');
	}
}

function banUser(socket: Socket, user: string) {
	if (socket)
		socket.emit('jtrj');
}

function setAdmin(socket: Socket, user: string) {
	if (socket)
		socket.emit('jtjr');
}

function addFriend(socket: Socket, user: string) {
	if (socket)
		socket.emit('jtjr');
}

export default function DropMenuUsersRoom(Props: { user: UserOfRoom, socket: Socket, role_user: string }) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{
					"& .MuiPaper-root": {
						backgroundColor: "#3D4060"
					}
				}}
			>
				<Box sx={{ maxWidth: 340, minWidth: 170 }}>
					<nav aria-label="main folders">
						<List dense={true} >
							<ListItem disablePadding >
								<ListItemButton onClick={handleClose}>
									<Avatar variant="square" src={playIcon} sx={{ marginRight: "15%", width: "19px", height: "19px" }} />
									<ListItemText primary="Play" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={() => { addFriend(Props.socket, Props.user.login); handleClose() }}>
									<Avatar variant="square" src={addFriendIcon} sx={{ marginRight: "15%", width: "18px", height: "18px" }} />
									<ListItemText primary="Add Friend" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={handleClose}>
									<Avatar variant="square" src={profileIcon} sx={{ marginRight: "15%", width: "18px", height: "18px" }} />
									<ListItemText primary="Show Profile" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={handleClose}>
									<Avatar variant="square" src={chatIcon} sx={{ marginRight: "14%", width: "20px", height: "20px" }} />
									<ListItemText primary="Chat" />
								</ListItemButton>
							</ListItem>
							{(Props.role_user === "owner" || Props.role_user === "admin") &&
								<ListItem disablePadding>
									<ListItemButton onClick={() => { setAdmin(Props.socket, Props.user.login); handleClose() }}>
										<Avatar variant="square" src={seAdminIcon} sx={{ marginRight: "15%", width: "20px", height: "20px" }} />
										<ListItemText primary="Set As Admin" />
									</ListItemButton>
								</ListItem>}
							{Props.role_user === "owner" &&
								<ListItem disablePadding>
									<ListItemButton onClick={() => { muteUser(Props.socket, Props.user.login); handleClose() }}>
										<Avatar variant="square" src={muteIcon} sx={{ marginRight: "15%", width: "20px", height: "20px" }} />
										<ListItemText primary="Mute" />
									</ListItemButton>
								</ListItem>}
							{Props.role_user === "owner" &&
								<ListItem disablePadding>
									<ListItemButton onClick={() => { banUser(Props.socket, Props.user.login); handleClose() }}>
										<Avatar variant="square" src={banIcon} sx={{ marginRight: "15%", width: "20px", height: "20px" }} />
										<ListItemText primary="Ban" />
									</ListItemButton>
								</ListItem>}
							{Props.role_user === "owner" &&
								<ListItem disablePadding>
									<ListItemButton onClick={() => { banUser(Props.socket, Props.user.login); handleClose() }}>
										<Avatar variant="square" src={banIcon} sx={{ marginRight: "15%", width: "20px", height: "20px" }} />
										<ListItemText primary="kick off" />
									</ListItemButton>
								</ListItem>}
						</List>
					</nav>
					<Divider />
				</Box>
			</Menu>
		</div>
	);
}

