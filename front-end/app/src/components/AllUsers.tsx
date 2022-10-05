import { Box, List, Stack, Typography } from '@mui/material'
import usersIcon from '../assets/users.png'
import dot3Icon from '../assets/dot3.png'
import User from './User';
import { useEffect, useState } from 'react';
import { getUsers, UserData } from '../requests/home';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const initUsers: UserData[] = [] as UserData[];

function AllUsers() {
	const [is_collapse, setCollapse] = useState(true);
	const [users, setUsers] = useState(initUsers);
	const socket_global = useSelector((state: RootState) => state.socketglobal).socket_global;
	const [connection, setConnection] = useState(false);


	const GetAllUsers = () => {
		getUsers().then((value) => {
			if (typeof (value) === typeof (initUsers)) {
				const data = value as UserData[];
				console.log("DATA", data);
				setUsers(data);
			}
		})
	}

	const handleDiscconnect = () => {
		socket_global.on('user_offline', (data:{user: string}) => {
			setConnection(!connection);
			GetAllUsers();
		});
	}

	const handleConnect= () => {
		socket_global.on('new_user', (data:{user: string}) => {
			setConnection(!connection);
			GetAllUsers();
		});
	}


	useEffect(() => {
		if (socket_global)
			handleDiscconnect();
		return (() => {
			socket_global.off("user_offline");
		})
	},)

	useEffect(() => {
		if (socket_global)
			handleConnect();
		return (() => {
			socket_global.off("new_user");
		})
	},)

	// useEffect(() =>{
	//
	// },[users])

	useEffect(() => {
		GetAllUsers()
		return(() => {
			setUsers(initUsers);
		});
	}, [connection])

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
					{/* {users} */}
					{users && users.map((item, index) => (
						<li key={index} className="item">
							<User avatar={item.avatar} username={item.username} login={item.login} level={item.level} status={item.status} />
						</li>
					))}
				</List>
			}
		</Box>
	)
}

export default AllUsers