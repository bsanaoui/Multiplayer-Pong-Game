import axios from "axios";

export type Achievement = {
    achieve_id: number,
    achieve_name: string,
    description: string,
    achieved: boolean,
}

export type MatchHistoryData ={
    id:number,
    avatar: string,
    username: string,
    level: number
    my_score: number,
    opp_score: number,
    date: Date,
    game: string,
}

export type UserStatsData = {
    login:string,
    username:string,
    avatar:string,
    level: number,
    total_matches: number,
    friends: number,
    ratio: number,
    wins: number,
    loses: number,
    goals: number,
    in_goals: number,
}
//========================== Get achievements ========================= //

export async function getAchievements(other_user?: string) {
    try {
        const { data, status } = await axios.get<Achievement[]>(
            process.env.REACT_APP_SERVER_IP + "/profile/achievements" +
                (typeof (other_user) === 'string') ? ("/" + other_user) : "",
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

//========================== Get match history ========================= //

export async function getMatchsHistory(other_user?: string) {
    try {
        const { data, status } = await axios.get<MatchHistoryData[]>(
            process.env.REACT_APP_SERVER_IP + "/profile/match_history" +
                (typeof (other_user) === 'string') ? ("/" + other_user) : "",
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

//========================== Get profile info ========================= //

export async function getStatsInfo(other_user?: string) {
    try {
        const { data, status } = await axios.get<UserStatsData>(
            process.env.REACT_APP_SERVER_IP + "/profile/infos" +
                (typeof (other_user) === 'string') ? ("/" + other_user) : "",
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