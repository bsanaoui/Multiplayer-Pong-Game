import { Box, Stack, Typography } from "@mui/material"
import { match } from "assert"
import avatar2 from '../../assets/avatar2.png'

interface matchHistoryProps {
	name: string,
	url_avatr: string,
	level: number,
	score_1: number,
	score_2: number,
	date: Date,
	game_type: string,
	duration: string,
}

const HeaderTable = (Props: { name: string }) => {
	return (
		<Typography
			sx={{
				color: '#BBBADD',
				fontWeight: '700',
				fontSize: '14px',
			}}>
			{Props.name}</Typography>
	)
}

const ContentField = (match_history: matchHistoryProps) => {
	return (
		<Stack
			direction="row" justifyContent="space-around" alignItems="center"
			sx={{
				height: "70px", width: "100%", background: "#4E548D"
			}}>
				
		</Stack>
	)
}

export const MatchHistory = () => {
	return (
		<Stack
			justifyContent="flex-start" alignItems="center"
			sx={{
				backgroundColor: "#3F4478",
				width: "900px",
				height: "500px",
				borderRadius: '30px',
			}}>
			<Stack
				direction="row" justifyContent="space-around" alignItems="center"
				sx={{
					height: "35px", width: "100%",
				}}>
				<HeaderTable name="Player" />
				<HeaderTable name="Score" />
				<HeaderTable name="Date" />
				<HeaderTable name="Game" />
				<HeaderTable name="Duration" />
			</Stack>
			{/* { {matchs.map((item) => <ContentField/>))}} */}
			<ContentField name={match_h.name}
				url_avatr={match_h.url_avatr}
				level={match_h.level}
				score_1={match_h.score_1} score_2={match_h.score_2}
				date={match_h.date}
				game_type={match_h.game_type}
				duration={match_h.duration} />

		</Stack>
	)
}

// ================== Tmp data ===================//
let match_h: matchHistoryProps = {
	name: "Cmos",
	url_avatr: avatar2,
	level: 58,
	score_1: 54,
	score_2: 24,
	date: new Date("2022-09-15"),
	game_type: "Classic",
	duration: "5 Min"
}