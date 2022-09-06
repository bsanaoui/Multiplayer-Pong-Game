import { Avatar, Box } from '@mui/material'
import achivJoystickIcon from '../../assets/Achievements/achiev1-joystick.png';
import achivSwordIcon from '../../assets/Achievements/Achiev2-sword.png';
import achivSpeedkIcon from '../../assets/Achievements/Achiev3-speed.png';
import achivmMndkIcon from '../../assets/Achievements/Achiev4-mind-control.png';
import achivFriendlyIcon from '../../assets/Achievements/Achiev5-friendly.png';
import achivTrophyIcon from '../../assets/Achievements/Achiev6-trophy.png';

interface AchivProps {
	name: string,
	valide: boolean,
}
const AchievementElement = (Props: AchivProps) => {
	const bg_achv: string = !Props.valide ? "#525784" : "#6659FF";

	let icon;
	switch (Props.name) {
		case '1': icon = achivJoystickIcon; break;
		case '2': icon = achivSwordIcon; break;
		case '3': icon = achivSpeedkIcon; break;
		case '4': icon = achivmMndkIcon; break;
		case '5': icon = achivFriendlyIcon; break;
		case '6': icon = achivTrophyIcon; break;
		default: icon = achivJoystickIcon; break;
	}

	return (
		<Box>
			<Avatar
				variant="square"
				sx={{
					height: '110px',
					width: '110px',
					backgroundColor: bg_achv,
					padding: "18px",
					borderRadius: "18px",
					"&:hover": {
						height: '140px',
						width: '140px',
						border: '4px solid #9CA0B5',
						borderRadius: '19px',
					}
				}}
			alt="Speed Achievement" src={icon} imgProps={{ style: { width: 'auto' } }} />
		</Box>
	)
}

export default AchievementElement