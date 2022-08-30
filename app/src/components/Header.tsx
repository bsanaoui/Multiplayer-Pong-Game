import { Box, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import CustomizedDialog from './CustomizedDialog';
import FormNewRoom from './FormNewRoom';

import animatedPong from '../assets/animatedPong.gif'
import HeaderPong from '../assets/HeaderPong.png'


const Header = () => {

	return (
		<Stack
			sx={{
				width: '100%',
				backgroundColor: '#000',
			}}
			direction="row"
			spacing={1}>
			<Box
				sx={{
					width: '100%',
				}}>
				<Stack
					spacing={1}>
					<Box
						sx={{
							height: "50%",
						}}>
						<img src={HeaderPong} className="center-img" height="130px" />
					</Box>
					 {/* button Create Room */}
					<Box className='center-button' >
						<CustomizedDialog>
							<FormNewRoom />
						</CustomizedDialog>
					</Box>
				</Stack>
			</Box>
			<Box
				sx={{
					width: '100%',
				}}>
				<img src={animatedPong} className="center-img" height="210px" />
			</Box>
			<Box
				sx={{
					width: '100%',
				}}></Box>
		</Stack>
	)
}

export default Header