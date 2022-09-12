import axios from "axios";

export type RoomData = {
	name: string,
	owner: string,
	_count: {
		users_room: number
	}

};

export async function getRoomsData(kind: string) {
	const url: string = (kind === "Public rooms" ? "/room/public_room" : "/room/protected_room");
	try {
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.get<RoomData[]>(
			process.env.REACT_APP_SERVER_IP + url,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		// console.log(JSON.stringify(data, null, 4));

		// 👇️ "response status is: 200"
		console.log('response status is: ', status);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			return error.message;
		} else {
			console.log("unexpected error: ", error);
			return "An unexpected error occurred";
		}
	}
}

export type RoomInfo = {
	name: string;
	type: string;
	password: string;
	owner: string;
};

export async function createRoom(room_info: RoomInfo) {
	try {
		// 👇️ const data: CreateUserResponse
		const { data } = await axios.post<RoomInfo>(
			process.env.REACT_APP_SERVER_IP + "/room/postroom",
			room_info,
			{
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
		);

		console.log(JSON.stringify(data, null, 4));

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			// 👇️ error: AxiosError<any, any>
			return error.message;
		} else {
			console.log("unexpected error: ", error);
			return "An unexpected error occurred";
		}
	}
}
