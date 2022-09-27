import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import playIcon from '../../assets/DropMenus/play.png'
import profileIcon from '../../assets/DropMenus/profile.png'
import chatIcon from '../../assets/DropMenus/chat.png'
import blockIcon from '../../assets/DropMenus/block.png'
import addFriendIcon from '../../assets/notification.png'
import { Friend, UserMessaging } from '../../requests/directMessage';
import { io, Socket } from 'socket.io-client';
// import { SocketContext, SocketContextType } from '../../context/socket';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { InterfaceEnum, setCurrentInterface } from '../../store/interfacesReducer';
import { changeCurrConversation } from '../../store/chatUiReducer';

interface MenuProps {
	is_dm_user: boolean,
	friend?: Friend,
	user?: UserMessaging,
};



export default function DropMenuUser({ friend, user, is_dm_user }: MenuProps) {
	const dispatch = useDispatch();
	// let { socket } = React.useContext(SocketContext) as SocketContextType;
	const socket = useSelector((state: RootState) => state.socketclient).socket;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const blockUser = () => {
		if (socket)
		{
			socket.emit('block_dm');
			// dispatch(changeCurrConversation({ user: '', avatar: ''}));
		}
	}

	const blockFriend = (friend:string) => {
		if (socket)
			socket.emit('block_friend',{friend:friend});
	}

	const chat = (user?: string, avatar?:string) => { // to edit
		if (socket) {
			if (socket && user) {
				socket.emit('join_dm_room', { to: user });
				// dispatch(changeCurrConversation({ user: user, avatar: avatar as string }));
				console.log("Chat with theme");
			}
		}
	}

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
								<ListItemButton onClick={handleClose}>
									<Avatar variant="square" src={profileIcon} sx={{ marginRight: "15%", width: "18px", height: "18px" }} />
									<ListItemText primary="Show Profile" />
								</ListItemButton>
							</ListItem>
							{(!is_dm_user) &&
								<ListItem disablePadding>
									<ListItemButton onClick={() => { handleClose(); chat(friend?.login, friend?.avatar) }}>
										<Avatar variant="square" src={chatIcon} sx={{ marginRight: "15%", width: "18px", height: "18px" }} />
										<ListItemText primary="Chat" />
									</ListItemButton>
								</ListItem>}
							{(is_dm_user && !friend) &&
								<ListItem disablePadding>
									<ListItemButton onClick={handleClose}>
										<Avatar variant="square" src={addFriendIcon} sx={{ marginRight: "15%", width: "18px", height: "18px" }} />
										<ListItemText primary="Add Friend" />
									</ListItemButton>
								</ListItem>}
							<ListItem disablePadding>
								<ListItemButton onClick={() => {
									handleClose();
									(is_dm_user) ? blockUser() : blockFriend(friend?.login as string) }}>
									<Avatar variant="square" src={blockIcon} sx={{ marginRight: "14%", width: "22px", height: "22px" }} />
									<ListItemText primary="Block" />
								</ListItemButton>
							</ListItem>
						</List>
					</nav>
					<Divider />
				</Box>
			</Menu>
		</div>
	);
}

