import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'

interface statSegmentProps {
	name: string,
	value: string
}

const StatSegment = (Props: statSegmentProps) => {
	return (
		<Stack alignItems="center">
			<Typography
				fontFamily="Lato"
				fontWeight='800'
				fontSize='0.8rem'
				color='#A9AEE3'>
				{Props.name}
			</Typography>
			<Typography
				fontFamily="Lato"
				fontWeight='800'
				fontSize='1.2rem'>
				{Props.value}
			</Typography>
		</Stack>
	)
}

const StatElementBar = () => {
	return (
		<Box sx={{
			width: "240px",
			height: "66px",
			background: "#4E548D",
			borderRadius: "17px",
			padding: '10px 19px'
		}}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center">
				<StatSegment name="Matches" value="03" />
				<StatSegment name="Friends" value="12" />
				<StatSegment name="Ratio %" value="75" />
			</Stack>
		</Box>
	)
}

export default StatElementBar