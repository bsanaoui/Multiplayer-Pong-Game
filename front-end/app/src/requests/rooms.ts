import axios from "axios";
import { UserOfRoom } from "../store/roomUsersReducer";

/* ============================ Get User's Room ======================= */
export async function requestUsersRoom(room_name: string) {
	try {
		// 👇️ const data: CreateUserResponse
		const { data } = await axios.post<UserOfRoom[]>(
			process.env.REACT_APP_SERVER_IP + "",
			{ name: room_name },
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

/* ============================ Get My Rooms ======================= */
// export async function getMyRooms() {
// 	try {
// 		// 👇️ const data: GetUsersResponse
// 		const { data, status } = await axios.get<RoomData[]>(
// 			process.env.REACT_APP_SERVER_IP + "",
// 			{
// 				headers: {
// 					Accept: "application/json",
// 				},
// 			}
// 		);
// 		console.log(JSON.stringify(data, null, 4));
// 		// 👇️ "response status is: 200"
// 		console.log('response status is: ', status);
// 		return data;
// 	} catch (error) {
// 		if (axios.isAxiosError(error)) {
// 			console.log("error message: ", error.message);
// 			return error.message;
// 		} else {
// 			console.log("unexpected error: ", error);
// 			return "An unexpected error occurred";
// 		}
// 	}
// }