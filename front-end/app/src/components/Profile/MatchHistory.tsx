import { Avatar, Box, Stack, Typography } from "@mui/material"
import { match } from "assert"
import avatar2 from '../../assets/avatar2.png'
import PlayerTable from "./PlayerTable"
import ScoreTable from "./ScoreTable"

interface matchHistoryProps {
	id: number,
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

const ContentField = (Props: matchHistoryProps) => {

	const bg_color = Props.id % 2 ? "#4E548D" : "#3F4478";

	return (
		<Stack
			direction="row" alignItems="center"
			sx={{
				height: "70px", width: "100%", background: bg_color,
			}}>
			<Box width="8.3%">
				<Avatar
					sx={{
						margin: 'auto',
						height: '46px',
						width: '46px',
						backgroundColor: "#FFF",
						padding: "4px",
					}}
					alt="Lion" src={Props.url_avatr} imgProps={{ style: { width: 'auto' } }} />
			</Box>
			<PlayerTable username={Props.name} level={Props.level} />
			<Box width="19.5%" paddingLeft="auto"><ScoreTable score_1={44} score_2={14} /></Box>
			<div style={{ width: "14%" }} className="typo-table-history">{Props.date.toISOString().split('T')[0]}</div>
			<div style={{ width: "19%" }} className="typo-table-history">{Props.game_type}</div>
			<div style={{ width: "17%" }} className="typo-table-history">{Props.duration}</div>
		</Stack >
	)
}

export const MatchHistory = () => {
	return (
		<Stack
			justifyContent="flex-start" alignItems="center"
			sx={{
				backgroundColor: "#3F4478",
				width: "880px",
				height: "500px",
				borderRadius: '30px',
			}}>
			<Stack
				direction="row" justifyContent="space-evenly" alignItems="center"
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
			<ContentField id={1} name={match_h.name}
				url_avatr={match_h.url_avatr}
				level={match_h.level}
				score_1={match_h.score_1} score_2={match_h.score_2}
				date={match_h.date}
				game_type={match_h.game_type}
				duration={match_h.duration} />
			<ContentField id={2} name={match_h.name}
				url_avatr={match_h.url_avatr}
				level={match_h.level}
				score_1={match_h.score_1} score_2={match_h.score_2}
				date={match_h.date}
				game_type={match_h.game_type}
				duration={match_h.duration} />
			<ContentField id={3} name={match_h.name}
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
	id: 1,
	name: "Cmos Jocki",
	url_avatr: avatar2,
	level: 58,
	score_1: 54,
	score_2: 24,
	date: new Date("2022-09-15"),
	game_type: "Classic",
	duration: "5 Min"
}