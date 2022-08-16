import { Box, List, Paper, Stack, Typography } from '@mui/material'
import usersIcon from '../assets/users.png'
import dot3Icon from '../assets/dot3.png'
import User from './User';


const users = Array.from({ length: 15 }, (_, index) => {
	return (
		<div className="item">
			<User />
		</div>
	);
});

function AllUsers() {
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: '0%',
				right: '0%',
				backgroundColor: "#242526",
				width: '390px', // delete after finish "AllUsers"
				height: '600px',
				borderRadius: '30px 0 0 0',
				padding: '17px',
			}}>
			<Stack
				direction="row"
				spacing={1.2}
				sx={{
					height: '60px',

				}}>
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
			<List style={{ maxHeight: '100%', overflow: 'auto' }} >
				{users} 
			</List>


		</Box>
	)
}

export default AllUsers