import axios from "axios";

export type RoomData = {
	room_id: string,
	owner: string,
	count: number,
};

export type RoomInfo = {
	name: string;
	type: string;
	password: string;
};

export type ProfileNavData = {
	level: number,
	invit_count: number,
	tfa: boolean,
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
				withCredentials: true,

			}
		);
		console.log(JSON.stringify(data, null, 4));
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



export async function createRoom(room_info: RoomInfo) {
	try {
		// 👇️ const data: CreateUserResponse
		const { data } = await axios.post<RoomInfo>(
			process.env.REACT_APP_SERVER_IP + "/room/postroom",
			room_info,
			{
				headers: {
					Accept: "application/json",
				},
				withCredentials: true,
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

export async function getProfileNavbar() {

	try {
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.get<ProfileNavData>(
			process.env.REACT_APP_SERVER_IP + "profile/navbar",
			{
				headers: {
					Accept: "application/json",
				},
				withCredentials: true,

			}
		);
		console.log(JSON.stringify(data, null, 4));
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
 
// ========================== Get QR CODE 2fa ========================= //
export async function getMQrCodeUrl() {
    try {
        const { data, status } = await axios.get<{qrcodeUrl: string}>(
            process.env.REACT_APP_SERVER_IP + "/twofactorauth/generate",
            {
                headers: {
                    Accept: "application/json",
                },
                withCredentials: true,
            }
        );
        console.log(JSON.stringify(data, null, 4));
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


// ========================== Send Code 2fa to activate ========================= //
export async function sendCode2FAEnable(code:string) {

	try {
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.post<string>(
			process.env.REACT_APP_SERVER_IP + "/twofactorauth/turnon",
			{tfacode:code},
			{
				headers: {
					Accept: "application/json",
				},
				withCredentials: true,

			}
		);
		console.log(JSON.stringify(data, null, 4));
		// 👇️ "response status is: 200"
		console.log('response status is: ', status);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			throw Error("Error");
		} else {
			console.log("unexpected error: ", error);
			return "An unexpected error occurred";
		}
	}
}
// ========================== Send Code 2fa to disable ========================= //
export async function sendCode2FADisable(code:string) {

	try {
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.post<string>(
			process.env.REACT_APP_SERVER_IP + "/twofactorauth/turnoff",
			{tfacode:code},
			{
				headers: {
					Accept: "application/json",
				},
				withCredentials: true,

			}
		);
		console.log(JSON.stringify(data, null, 4));
		// 👇️ "response status is: 200"
		console.log('response status is: ', status);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			throw Error("Error");
		} else {
			console.log("unexpected error: ", error);
			return "An unexpected error occurred";
		}
	}
}

