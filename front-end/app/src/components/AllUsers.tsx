import { Box, List, Stack, Typography } from '@mui/material'
import usersIcon from '../assets/users.png'
import dot3Icon from '../assets/dot3.png'
import User from './User';
import { useState } from 'react';


const users = Array.from({ length: 15 }, (_, index) => {
	return (
		<li key={index} className="item">
			<User />
		</li>
	);
});

function AllUsers() {
	const [is_collapse, setCollapse] = useState(true);

	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: '0%',
				right: '0%',
				backgroundColor: "#130742",
				width: '350px', // delete after finish "AllUsers"
				borderRadius: '30px 0 0 0',
				padding: '17px',
			}}>
			<Stack
				direction="row"
				spacing={1.2}
				sx={{
					height: '45px',
					cursor: "pointer",
				}}
				onClick={() => { is_collapse ? setCollapse(false) : setCollapse(true) }}>
				<div>
					<img
						style={{ height: '33px', paddingLeft: '12px' }}
						className="center" alt='users' src={usersIcon} />
				</div>
				<Typography
					sx={{
						fontWeight: '600',
						fontSize: '1.5rem',
					}}>
					Users
				</Typography>
				<div style={{ width: "100%", paddingTop: '4px' }}>
					<img
						style={{ height: '22px', float: 'right' }}
						className="center" alt='users' src={dot3Icon} />
				</div>
			</Stack>
			{is_collapse &&
				<List style={{ maxHeight: '500px', overflow: 'auto' }} >
					{users}
				</List>
			}
		</Box>
	)
}

export default AllUsers