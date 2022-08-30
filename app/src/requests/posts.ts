import axios from 'axios';


export type RoomInfo = {
    user: string
    room_name: string,
    kind: string,
    password: string
}

export async function createRoom(room_info:RoomInfo) {
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<RoomInfo>(
      'https://reqres.in/api/users',
      room_info,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
