import axios from 'axios';

export type RoomData = {
    room_name: string,
	owner_name: string,
	nb_users: number
};

// type GetRoomsDataResponse = {
//   data: RoomData[];
// };

export async function getRoomsData(){
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<RoomData[]>(
      'http://localhost:3333/room/public_room',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}


export function getRoomsDataa():RoomData[]{

    getRoomsData()

    let data:RoomData[] = [];
    getRoomsData().then((value) => {
        data = value as RoomData[];
    })
    return data;
}