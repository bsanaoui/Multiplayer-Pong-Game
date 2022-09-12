import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import AchievementElement from './Profile/AchievementElement'
import AvatarProfile from './Profile/AvatarProfile'
import { MatchHistory } from './Profile/MatchHistory'
import StatElementBar from './Profile/StatElementBar'
import StatSegment from './Profile/StatSegment'
import UserNameElement from './Profile/UserNameElement'


export const DashboardUser = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}
            sx={{ width: "100%", margin: "3%" }}>
            {/* ****************** User Stats **************** */}
            <Stack alignItems="flex-start" spacing={10} paddingTop="25px"
                sx={{ backgroundColor: "#3F4478", width: "380px", height: "95%", borderRadius: "30px" }}>
                {/* ****************** User Head **************** */}
                <Stack direction="row" alignItems="flex-start" spacing={0.5} paddingLeft="6%">
                    <AvatarProfile />
                    <Stack alignItems="flex-start" spacing={1}>
                        <Box sx={{ marginLeft: "13px", marginTop: "5px" }}>
                            <UserNameElement />
                        </Box>
                        <StatElementBar />
                    </Stack>
                </Stack>
                {/* ****************** User Stats **************** */}
                <Box paddingLeft="8%">
                    <Box>
                        <div className="global-score" style={{ color: "#A9AEE3" }} >Global Score </div>
                        <div className="global-score"  >268</div>
                    </Box>
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
            <Stack alignItems="center" spacing={5}
                sx={{ width: "850px", height: "95%", borderRadius: "30px" }}>
                {/* **************** User Achievements *************** */}
                <Stack justifyContent="flex-start" alignItems="flex-start" spacing={3}
                    sx={{ width: "100%", height: "430px", borderRadius: "30px" }}>
                    <Box>
                        <Typography display="inline" sx={{
                            fontWeight: '700',
                            fontSize: '32px',
                            lineHeight: '109.52%',
                        }}>Achievements </Typography>
                        <Typography display="inline" color="#A1AAFF">(3/6 Received)</Typography>
                    </Box>
                    <Stack alignItems="center" justifyContent="center" spacing={3}
                        sx={{ backgroundColor: "#3F4478", width: "100%", height: "100%", borderRadius: "30px" }}>
                        <Stack direction="row" spacing={3}>
                            <AchievementElement name={'1'} valide={false} />
                            <AchievementElement name={'2'} valide={true} />
                            <AchievementElement name={'3'} valide={true} />
                            <AchievementElement name={'4'} valide={false} />
                            <AchievementElement name={'5'} valide={true} />
                            <AchievementElement name={'6'} valide={false} />
                        </Stack>
                        <Box width="90%">
                            <Typography display="inline" sx={{
                                fontWeight: '700',
                                fontSize: '18px',
                                lineHeight: '109.52%',
                            }}>Description of the achievement: </Typography>
                            <Typography display="inline" color="#A1AAFF">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                in a piece of classical Latin literature from 45
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                {/* **************** Match History *************** */}
                <Stack alignItems="flex-start" spacing={4}
                    sx={{ width: "100%", height: "95%", borderRadius: "30px" }}>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '32px',
                        lineHeight: '109.52%',
                    }}>Match history</Typography>
                    <MatchHistory/>
                </Stack>
            </Stack>
        </Stack>
    )
}
