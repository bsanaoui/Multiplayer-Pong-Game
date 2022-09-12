
import { Avatar, Divider, Stack } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { InterfaceEnum, setCurrentInterface } from "../store/interfacesReducer";

import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/chat-room.png'
import dashboardIcon from '../assets/dashboard-icon.png'
import friendsIcon from '../assets/friends.png'
import matchmakingIcon from '../assets/matchmaking-icon.png'
import streamingIcon from '../assets/streaming.png'
import homeIcon from '../assets/home.png'
import avatar2 from '../assets/avatar2.png'
import LogoutIcon from '../assets/log-out.png';
import collapseIcon from '../assets/right-arrow.png';

import { Box } from '@mui/system';
import { setCollapse } from '../store/collapseNavReducer';

export const NavbarCollapsed = () => {
    return (
        <Stack justifyContent="space-between"
            sx={{ height: "100vh", width: "70px", backgroundColor: "#303465" }}>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1.8}
                padding="12%" paddingTop="17%" >
                <Avatar
                    variant="circular"
                    sx={{
                        height: '52px',
                        width: '52px',
                        backgroundColor: "#FFF",
                        padding: "3.5px",
                        border: "3px solid #535995",
                    }}
                    alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' } }} />
            </Stack>
            <Stack width="100%"
                divider={<Divider orientation="horizontal" flexItem />}>
                <CustomButton _name={InterfaceEnum.Home} _icon={homeIcon} />
                <CustomButton _name={InterfaceEnum.Dashboard} _icon={dashboardIcon} />
                <CustomButton _name={InterfaceEnum.ChatRoom} _icon={roomIcon} />
                <CustomButton _name={InterfaceEnum.InstantMessaging} _icon={messengerIcon} />
                <CustomButton _name={InterfaceEnum.Friends} _icon={friendsIcon} />
                <CustomButton _name={InterfaceEnum.Matchmaking} _icon={matchmakingIcon} />
                <CustomButton _name={InterfaceEnum.LiveGames} _icon={streamingIcon} />
            </Stack>
            <Box>
                <Box sx={{marginBottom:"20%", height:"189.5px"}}>
                    {/* <Button2FA verified={true} /> */}
                    </Box>
                <Collapse />
                <Divider orientation="horizontal" flexItem />
                <CustomButton _name={InterfaceEnum.Logout} _icon={LogoutIcon} />
            </Box>
        </Stack>
    )
}

interface ButtonProps {
    _name: InterfaceEnum,
    _icon: string,
}

const CustomButton = ({ _name, _icon }: ButtonProps) => {
    const currentInterface = useSelector((state: RootState) => state.interfaces).current;
    const dispatch = useDispatch();

    let backgroundButton = currentInterface === _name ? "#543EC0" : "#303465";
    return (
        <div style={{ backgroundColor: backgroundButton }}
            onClick={() => {
                dispatch(setCurrentInterface(_name))
            }}>
            <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row" sx={{
                paddingLeft: "15px", cursor: "pointer", height: "44px", ":hover":{backgroundColor:"#3F5274"}
            }}>
                <Avatar src={_icon} style={{ padding: "13%" }} />
      
            </Stack>
        </div>
    )
}

const Collapse = () => {
    const dispatch = useDispatch();

    return (
        <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row" sx={{
            paddingLeft: "13px", cursor: "pointer", height: "44px", backgroundColor: "#3F5274",
            ":hover":{backgroundColor:"#3F4478"}
        }}
        onClick={() => { dispatch(setCollapse(false)) }}
        >
            <Avatar src={collapseIcon} style={{ padding: "5.2%" }} />
    
        </Stack>
    )
}