import { Stack, Typography } from '@mui/material'
import RoomButton from './RoomButton'
import reloadIcon from '../assets/reload-icon.png'
import { getRoomsData, RoomData } from '../requests/home';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function createRooms(rooms_info: Array<RoomData>): JSX.Element[] {
	const rooms = Array.from({ length: rooms_info.length }, (_, index) => {
		return (
			<li key={index++} className="item">
				<RoomButton room_id={rooms_info[index].room_id}
					owner={rooms_info[index].owner}
					count={rooms_info[index].count} />
			</li>
		);
	});
	return rooms;
}

interface VisibilityProps {
	kind: string
}

const initRooms: RoomData[] = [] as RoomData[];
const PublicRooms = ({ kind }: VisibilityProps) => {
	const currentPage = useSelector((state: RootState) => state.interfaces).current;
	const [rooms, setRooms] = useState(initRooms);

	useEffect(() => {
		getRoomsData(kind).then((value) => {
			const data = value as Array<RoomData>;
			if ((typeof data) === (typeof initRooms))
				setRooms(data);
		})
		return () => {
			setRooms(initRooms);
		}
	},[currentPage]);

	return (
		<Stack
			spacing={2}
			sx={{ width: '100%', }}>
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
				<img alt='reload Icon' src={reloadIcon} style={{ width: 35 }} />
			</Stack>
			<div className="horizontal_slider">
				<div className="slider_container">
					{rooms.length && createRooms(rooms)}
				</div>
			</div>
		</Stack>
	)
}

export default PublicRooms