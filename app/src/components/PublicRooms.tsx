import { Box, Paper, Stack, Typography } from '@mui/material'
import RoomButton from './RoomButton'
import reloadIcon from '../assets/reload-icon.png'
import { getRoomsDataa, RoomData } from '../requests/get';

const data_rooms:Array<RoomData> = [
    {room_name: 'Room Cmos 3.x', owner_name: 'bsana..', nb_users: 85},
    {room_name: 'Gtx Cmos 3.x', owner_name: 'Testos..', nb_users: 25},
];


function createRooms(rooms_info: Array<RoomData>): JSX.Element[] {
	const rooms = Array.from({ length: rooms_info.length }, (_, index) => {
		return (
			<div className="item">
				<RoomButton room_name={rooms_info[index].room_name}
					owner_name={rooms_info[index].owner_name}
					nb_users={rooms_info[index].nb_users} />
			</div>
		);
	});
	return rooms;
}

interface VisibilityProps {
	kind: string
}

const PublicRooms = ({ kind }: VisibilityProps) => {

	// state = {
	// 	persons: []
	//   }

	// componentDidMount() {
	// 	axios.get(`https://jsonplaceholder.typicode.com/users`)
	// 	  .then(res => {
	// 		const persons = res.data;
	// 		this.setState({ persons });
	// 	  })
	// }

	return (
		<Stack
			spacing={2}
			sx={{
				width: '100%',
				// marginLeft: '50px'
			}}>
			<Stack
				spacing={2}
				direction='row'>
				<Typography
					sx={{
						fontWeight: 'bold',
						fontSize: '2rem',
						lineHeight: ' 35.05px',
						align: 'center',
					}}>
					{kind}</Typography>
				<img src={reloadIcon} style={{ width: 35 }} />
			</Stack>
			<div className="horizontal_slider">
				<div className="slider_container">
					{/* {createRooms(data_rooms)}
					{createRooms(data_rooms)}
					{createRooms(data_rooms)} */}
					{/* {
						geRoomsData().then((value): void => {
							const data_rooms: RoomData[] | string = value;
							console.log(data_rooms); // 👉️ {name: 'Tom', country: 'Chile'}
						});
					} */}
					{createRooms(getRoomsDataa())}
				</div>
			</div>
		</Stack>
	)
}

export default PublicRooms