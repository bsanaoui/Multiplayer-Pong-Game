import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Achievement, getAchievements } from "../../requests/dashboard";
import { RootState } from "../../store";
import AchievementElement from "./Elements/AchievementElement"


let initAchievements: Achievement[] = [] as Achievement[];
initAchievements.length = 0;

export const Achievements = ({other_user}:{other_user?:string}) => {
    const [achievemets, setAchievements] = useState(initAchievements);
    const achievemetDiscription =  useSelector((state: RootState) => state.profile).curr_achievement;
    

    const countValidAchievements = (achiev:Achievement[]):number => {
        let count:number = 0;
        for (let element of achiev) {
            if (element.achieved)
                count++;
        }
        return (count);
    }

    useEffect(() => {
        getAchievements(other_user).then((value) => {
            if ((typeof value) === (typeof initAchievements)) {
                const data = value as Achievement[];
                console.log("achivvvvvvvv: " , data)
                setAchievements(data);
            }
        })
            .catch((reason: string) => {
                console.log("Error ;matchs:", reason)
            })
        return (() => {
            setAchievements(initAchievements);
        })
    }, []);

    return (
        <Stack justifyContent="flex-start" alignItems="flex-start" spacing={3}
            sx={{ width: "100%", height: "430px", borderRadius: "30px" }}>
            <Box>
                <Typography display="inline" sx={{
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '109.52%',
                }}>Achievements </Typography>
                <Typography display="inline" color="#A1AAFF">(
                    {achievemets && countValidAchievements(achievemets)}
                /6 Received)</Typography>
                {/* <Typography display="inline" color="#A1AAFF">(3/6 Received)</Typography> */}
            </Box>
            <Stack alignItems="center" justifyContent="center" spacing={3}
                sx={{ backgroundColor: "#3F4478", width: "100%", height: "100%", borderRadius: "30px" }}>
                <Stack direction="row" spacing={3}>
                    {achievemets && achievemets.map((item, index) => (
                        <li key={index}>
                            <AchievementElement achieve_id={item.achieve_id}
                            achieve_name={item.achieve_name}
                            description={item.description}
                            achieved={item.achieved} />
                        </li>
                    ))}
                    {/*{!achievemets &&  <AchievementElement achieve_id={1} achieve_name={""} description={"achiev 1"} achieved={false} />}*/}
                    {/*{!achievemets &&  <AchievementElement achieve_id={2} achieve_name={""} description={"achiev 2"} achieved={false} />}*/}
                    {/*{!achievemets &&  <AchievementElement achieve_id={3} achieve_name={""} description={"achiev 3"} achieved={false} />}*/}
                    {/*{!achievemets &&  <AchievementElement achieve_id={4} achieve_name={""} description={"achiev 4"} achieved={false} />}*/}
                    {/*{!achievemets &&  <AchievementElement achieve_id={5} achieve_name={""} description={"achiev 5"} achieved={false} />}*/}
                    {/*{!achievemets &&  <AchievementElement achieve_id={6} achieve_name={""} description={"achiev 6"} achieved={false} />}*/}
                </Stack>
                <Box width="90%">
                    <Typography display="inline" sx={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '109.52%',
                    }}>Description of the achievement: </Typography>

                    <Typography display="inline" color="#A1AAFF">
                        {achievemetDiscription !== "" && achievemetDiscription}
                        {(achievemets.length && achievemetDiscription === "") && achievemets[0].achieve_name + ", " + achievemets[0].description }
                    </Typography>
                    {/*{!achievemets && */}
                    {/*//  <Typography display="inline" color="#A1AAFF">*/}
                    {/*//     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots*/}
                    {/*//     in a piece of classical Latin literature from 45*/}
                    {/*// </Typography>}*/}
                </Box>
            </Stack>
        </Stack>
    )
}