import axios from "axios";

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

export async function requestMessages(name_room: string) {
  try {
    // 👇️ const data: CreateUserResponse
    console.log({ name: name_room });
    const { data } = await axios.post<{ from: string; content_msg: string }[]>(
      process.env.REACT_APP_SERVER_IP + "/room/post_name_room",
      { name: name_room },
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

export async function requestDirectMsgs(from: string, to: String) {
  try {
    // 👇️ const data: CreateUserResponse
    console.log({ from, to });
    const { data } = await axios.post<
      { from: string; to: string; content_msg: string }[]
    >(
      process.env.REACT_APP_SERVER_IP + "/room/post_name_room_dm",
      { from: from, to: to },
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
