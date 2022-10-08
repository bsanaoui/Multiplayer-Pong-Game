import { Box, Button, Input, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { initUser } from "../store/userReducer";
import ImagePong from '../assets/HeaderPongSin.png'
import backgroundgif from '../assets/backgroundLogin.gif'

const LoginPage = () => {
	const dispatch = useDispatch();

	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				position:"relative",
				// background: "linear-gradient( 116.27deg, #191D45 31.5%, #4044A5 61.17% )",
				// "::before": {
				// 	// content: "",
					backgroundImage: `url(${backgroundgif})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					// position: 'absolute',
					// width: "100%",
					// height: "100%",
					left: 0,
					top: 0,
					// boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					// opacity: 0.8,
				// }
			}}
		>
			<Stack
				className="home__container"
				margin="auto"
				width="50vw"
				height="100vh"
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}>
				<img src={ImagePong}></img>
				<Typography className="hometitle" sx={{
					width: "80%",
					fontWeight: '700',
					fontSize: '2.9vw',
					textAlign: 'center',
				}}>
					Playing games together
					has never been so easy
				</Typography>
				<Typography className="hometxt" sx={{
					width: "60%",
					fontWeight: '300',
					fontSize: '1.8vw',
					textAlign: 'center',
					color: "#D7D7D7"
				}}>
					Use your keyboard as gamepads
					and start playing instantly
				</Typography>
				<form action={process.env.REACT_APP_SERVER_IP + "/auth"} method='POST'>
					<button className='button-Auth center-text center-button home-bnt' style={{ color: "#FFF", width: '21vw', marginTop: '7%', fontSize: '1.6vw' }}
						type="submit">
						Start playing now
					</button>
				</form>
			</Stack >
		</Box>
	)
}

export default LoginPage