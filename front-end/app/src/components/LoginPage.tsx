import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useDispatch } from 'react-redux';
import { initUser } from "../store/userReducer";


const LoginPage = () => {
	const dispatch = useDispatch();

	return (
		<Box
			sx={{
				background: "linear-gradient( 116.27deg, #191D45 31.5%, #4044A5 61.17% )",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			}}>
			<Stack
				margin="auto"
				width="50vw"
				height="100vh"
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}>
				<Typography sx={{
					width: "80%",
					fontWeight: '700',
					fontSize: '2.9vw',
					textAlign: 'center',
				}}>
					Playing games together
					has never been so easy
				</Typography>
				<Typography sx={{
					width: "60%",
					fontWeight: '300',
					fontSize: '1.8vw',
					textAlign: 'center',
					color: "#D7D7D7"
				}}>
					Use your keyboard as gamepads
					and start playing instantly
				</Typography>
				{/* <form action={process.env.REACT_APP_SERVER_IP} method='POST'> */}
					<button className='button-Auth center-text center-button' style={{ color:"#FFF", width: '21vw', marginTop: '7%', fontSize: '1.6vw' }}
						type="submit" onClick={() => { dispatch(initUser()) }}>
						Start playing now
					</button>
				{/* </form> */}
			</Stack >
		</Box>
	)
}
// const LoginPage = () => {
//     const dispatch = useDispatch();

//     const [username, setUser] = useState("");

//     return (
//         <form className="enter-username-form" onSubmit={e => {
//             e.preventDefault();
//         }}>
//             <Input
//                 type="text"
//                 // value={props.username} 
//                 onChange={e => setUser(e.target.value)}
//                 placeholder="Enter a username..."
//                 required={true}
//             />
//             <Button type="submit" onClick={() => dispatch(setUsername(username))}>Submit</Button>
//         </form>
//     )
// }

export default LoginPage