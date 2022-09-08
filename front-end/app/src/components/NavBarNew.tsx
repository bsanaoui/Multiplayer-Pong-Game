
import { Avatar, Icon, IconButton, Stack, Typography } from '@mui/material'

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { changeStatusFriends, clearMessages } from "../store/chatUiReducer";

import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/chat-room.png'

export const NavBarNew = () => {
	const is_friends = useSelector((state: RootState) => state.chat).is_friend; // call-back function

	return (
		<Stack sx={{ height: "100vh", width:"250px", backgroundColor: "#262948" }}>
			{/* <div style={{ margin: 'auto' }}> */}
				<CustomButton _name="Chat Room" />
				<CustomButton _name="Instant Messaging" />
				<CustomButton _name="Profile" />
				<CustomButton _name="Instant Messaging" />
			{/* </div> */}
		</Stack>
	)
}

interface ButtonProps {
    _name: string,
}

export const CustomButton = ({ _name, }: ButtonProps) => {
    const is_friends = useSelector((state: RootState) => state.chat).is_friend; // call-back function
    const dispatch = useDispatch();

    let custom_icon = (_name.charAt(0) === 'I') ? messengerIcon : roomIcon;
    let backgroundButton = (((_name.charAt(0) === 'I') && is_friends) ||
        (_name.charAt(0) !== 'I') && !is_friends) ? "#3F4478" : "#282948";
    return (
        <div style={{ backgroundColor: backgroundButton }}
            onClick={() => {
                _name === "Chat Room" ? dispatch(changeStatusFriends(false)) : dispatch(changeStatusFriends(true));
                dispatch(clearMessages())
            }}>
            <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row" sx={{
                paddingLeft: "14px", cursor:"pointer", height:"44px"
            }}>
                <Avatar src={custom_icon} style={{padding:"3.2%"}}>
                </Avatar>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '109.52%',
                    }}>
                        {_name}
                    </Typography>
            </Stack>
        </div>
    )
}