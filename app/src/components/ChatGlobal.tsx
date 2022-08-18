import { IconButton, Stack, Typography } from "@mui/material"
import ChatUI from "./ChatUI"
import Friends from "./Friends"
import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/group.png'


const ChatGlobal = () => {
    return (
        <Stack direction="row" height="100vh" >
            <Stack sx={{ height: "100%", backgroundColor: "#262948" }}>
                <div style={{ margin:'auto'}}>
                    <CustomButton _name="Chat Room" _color="#262948" />
                    <CustomButton _name="Instant Messaging" _color="#3F4478" />
                </div>
            </Stack>
            <Friends />
            <ChatUI />
        </Stack>
    )
}

interface ButtonProps {
    _name: string,
    _color: string
}

const CustomButton = ({ _name, _color }: ButtonProps) => {

    let custom_icon = (_name.charAt(0) === 'I') ? messengerIcon : roomIcon;

    return (
        <div>
            <Stack spacing={2} direction="row" sx={{
                width: "300px", backgroundColor: _color, padding: "3px"
            }}>
                <IconButton>
                    <img src={custom_icon} width="24px" />
                </IconButton>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '22px',
                        lineHeight: '109.52%',

                    }}>
                        {_name}
                    </Typography>
                </div>
            </Stack>
        </div>
    )
}
export default ChatGlobal