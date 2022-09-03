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

// interface Props {
//   setOpenMenu: (val: boolean) => void;
// }

// export default function DropMenu({setOpenMenu}:Props) {
//   return (
// <Box sx={{ maxWidth: 360, bgcolor: '#3D4060'}}>
//   <nav aria-label="main folders">
//     <List dense={true}>
//       <ListItem disablePadding>
//         <ListItemButton onClick={() => setOpenMenu(false)}>
//           <ListItemIcon>
//             <ExitToAppIcon />
//           </ListItemIcon>
//           <ListItemText primary="Leave" />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton onClick={() => setOpenMenu(false)}>
//           <ListItemIcon>
//             <HttpsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Change the password" />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton onClick={() => setOpenMenu(false)}>
//           <ListItemIcon>
//             <SettingsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Change type room" />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton onClick={() => setOpenMenu(false)}>
//           <ListItemIcon>
//             <GroupAddIcon />
//           </ListItemIcon>
//           <ListItemText primary="Invite a user" />
//         </ListItemButton>
//       </ListItem>
//     </List>
//   </nav>
//   <Divider />
// </Box>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function DropMenu() {
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
			>
				<Box sx={{ maxWidth: 360, bgcolor: '#3D4060', paddingTop:'0', paddingBotto:'0' }}>
					<nav aria-label="main folders">
						<List dense={true} >
							<ListItem disablePadding>
								<ListItemButton onClick={handleClose}>
									<ListItemIcon>
										<ExitToAppIcon />
									</ListItemIcon>
									<ListItemText primary="Leave" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={handleClose}>
									<ListItemIcon>
										<HttpsIcon />
									</ListItemIcon>
									<ListItemText primary="Change the password" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={handleClose}>
									<ListItemIcon>
										<SettingsIcon />
									</ListItemIcon>
									<ListItemText primary="Change type room" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={handleClose}>
									<ListItemIcon>
										<GroupAddIcon />
									</ListItemIcon>
									<ListItemText primary="Invite a user" />
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

