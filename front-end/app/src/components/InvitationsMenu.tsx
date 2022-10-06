import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Avatar, Badge, Button, Fab, IconButton, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import notification_invite from '../assets/notification.png'
import { InvitationFriend } from './InvitationFriend&Game/InvitationFriend';
import avatar2 from '../assets/man.png'
import { getInvitations, InvitationData } from '../requests/home';
import { useNavigate } from 'react-router-dom';

const initInvitationData: InvitationData[] = [] as InvitationData[];

export const InvitationsMenu = (Props: { count_invit: number }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const [invitations, setInvitations] = React.useState(initInvitationData);
	const navigate = useNavigate();
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	React.useEffect(() => {
		getInvitations().then((value) => {
			if (typeof (value) === typeof (initInvitationData)) {
				const data = value as InvitationData[];
				setInvitations(data);
			}
		}).catch((error: any) => {
			console.log("Error ;Not Authorized", error);
			navigate(error.redirectTo);
		})
	}, [])

	return (
		<Box>
			<Badge badgeContent={Props.count_invit} color="secondary">
				<IconButton sx={{ width: "20px", height: "20px" }}
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<NotificationsIcon />
				</IconButton>
			</Badge>
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
				<Box sx={{ maxWidth: 380 }}>
					{/* <nav aria-label="main folders"> */}
					<List >
						{invitations && invitations.map((item) => (
							<ListItem >
								<InvitationFriend login={item.login} username={item.username} avatar={item.avatar} />
							</ListItem>
						))}
						{/* <ListItem >
							<InvitationFriend username="Joky Cmos" avatar={avatar2} />
						</ListItem>
						<ListItem >
							<InvitationFriend username="Foody Cmos" avatar={avatar2} />
						</ListItem>
						<ListItem >
							<InvitationFriend username="Cmo Cmos" avatar={avatar2} />
						</ListItem>
						<ListItem >
							<InvitationFriend username="Joky Cmos" avatar={avatar2} />
						</ListItem> */}
					</List>
					{/* </nav> */}
					<Divider />
				</Box>
			</Menu>
		</Box>
	);
}