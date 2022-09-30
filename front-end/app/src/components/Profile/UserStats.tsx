import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getStatsInfo, UserStatsData } from '../../requests/dashboard'
import AvatarProfile from './Elements/AvatarProfile'
import StatElementBar from './Elements/StatElementBar'
import StatSegment from './Elements/StatSegment'
import UserNameElement from './Elements/UserNameElement'

let initUserStats: UserStatsData;

const UserStats = ({other_user}:{other_user?:string}) => {
	const [user_stats, setUserStats] = useState(initUserStats);
	useEffect(() => {
        getStatsInfo(other_user).then((value) => {
            if ((typeof value) === (typeof initUserStats)) {
                const data = value as UserStatsData;
                setUserStats(data);
            }
        })
            .catch((reason: string) => {
                console.log("Error ;matchs:", reason)
            })
        return (() => {
            setUserStats(initUserStats);
        })
    }, []);

	return (
		<Stack alignItems="flex-start" spacing={10} paddingTop="25px"
			sx={{ backgroundColor: "#3F4478", width: "380px", height: "95%", borderRadius: "30px" }}>
			{/* ****************** User Head **************** */}
			<Stack direction="row" alignItems="flex-start" spacing={0.5} paddingLeft="6%">
				<AvatarProfile avatar={user_stats.avatar} />
				<Stack alignItems="flex-start" spacing={1}>
					<Box sx={{ marginLeft: "13px", marginTop: "5px" }}>
						<UserNameElement login={user_stats.login} username={user_stats.username} level={user_stats.level} />
					</Box>
					<StatElementBar />
				</Stack>
			</Stack>
			{/* ****************** User Stats **************** */}
			<Box paddingLeft="8%">
				{/* <Box>
					<div className="global-score" style={{ color: "#A9AEE3" }} >Global Score </div>
					<div className="global-score"  >268</div>
				</Box> */}
				<Stack direction="row" spacing={5} marginTop="10%">
					<StatSegment name={'Wins'} value={'23'} />
					<StatSegment name={'Looses'} value={'15'} />
				</Stack>
				<Stack direction="row" spacing={5} marginTop="10%">
					<StatSegment name={'Goals'} value={'115'} />
					<StatSegment name={'Champions'} value={'02'} />
				</Stack>
			</Box>
		</Stack>
	)
}

export default UserStats