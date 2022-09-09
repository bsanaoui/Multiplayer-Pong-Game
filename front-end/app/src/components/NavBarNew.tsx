
import { Avatar, Divider, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { InterfaceEnum, setCurrentInterface } from "../store/interfacesReducer";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/chat-room.png'
import dashboardIcon from '../assets/dashboard-icon.png'
import friendsIcon from '../assets/friends.png'
import matchmakingIcon from '../assets/matchmaking-icon.png'
import streamingIcon from '../assets/streaming.png'
import homeIcon from '../assets/home.png'
import avatar2 from '../assets/avatar2.png'
import PlayerTable from './Profile/PlayerTable';
import LogoutIcon from '../assets/log-out.png';
import collapseIcon from '../assets/collapse-nav.png';

import { Box } from '@mui/system';
import { Button2FA } from './Button2FA';

let getInterface = (interfaceEnum: InterfaceEnum): string => {
    switch (interfaceEnum) {
        case InterfaceEnum.Home: return "Home"
        case InterfaceEnum.Dashboard: return "Dashboard";
        case InterfaceEnum.ChatRoom: return "Chat Room";
        case InterfaceEnum.InstantMessaging: return "Instant Messaging";
        case InterfaceEnum.Friends: return "Friends";
        case InterfaceEnum.Matchmaking: return "Matchmaking";
        case InterfaceEnum.LiveGames: return "Live Games";
        case InterfaceEnum.Logout: return "Log Out";
        default: return "Home";
    }
};

export const NavBarNew = () => {
    return (
        <Stack justifyContent="space-between"
            sx={{ height: "100vh", width: "240px", backgroundColor: "#262948" }}>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1.8}
                sx={{ padding: "3.3%", paddingTop: "5%" }}>
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
                <Stack justifyContent="space-between" alignItems="flex-start" spacing={0}>
                    <Typography
                        className='truncate-typo'
                        width='100%'
                        fontWeight="700"
                        fontSize="1.3rem"
                        fontFamily="Lato"
                        lineHeight="130%">
                        Cmos Pancake
                    </Typography>
                    <Stack direction="row" spacing={0.5}>
                        <SportsEsportsIcon sx={{ width: "17px" }} />
                        <Typography
                            sx={{
                                color: '#ADADAD',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                paddingTop: '1.2px',
                            }}>
                            Level 32</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
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
                <Box sx={{marginBottom:"20%"}}><Button2FA verified={true} /></Box>
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

    let backgroundButton = currentInterface === _name ? "#3F4478" : "#282948";
    return (
        <div style={{ backgroundColor: backgroundButton }}
            onClick={() => {
                dispatch(setCurrentInterface(_name))
            }}>
            <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row" sx={{
                paddingLeft: "10px", cursor: "pointer", height: "44px"
            }}>
                <Avatar src={_icon} style={{ padding: "3.5%" }} />
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '109.52%',
                }}>
                    {getInterface(_name)}
                </Typography>
            </Stack>
        </div>
    )
}

const Collapse = () => {
    return (
        <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row" sx={{
            paddingLeft: "6px", cursor: "pointer", height: "44px", backgroundColor: "#3F5274",
        }}>
            <Avatar src={collapseIcon} style={{ padding: "2%" }} />
            <Typography sx={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '109.52%',
            }}>
                Collapse
            </Typography>
        </Stack>
    )
}