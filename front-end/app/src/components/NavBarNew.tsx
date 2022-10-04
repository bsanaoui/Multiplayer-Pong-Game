
import { Avatar, Badge, Button, Divider, IconButton, Slide, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { InterfaceEnum, setCurrentInterface } from "../store/interfacesReducer";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EditIcon from '@mui/icons-material/Edit';

import messengerIcon from '../assets/messenger.png'
import roomIcon from '../assets/chat-room.png'
import dashboardIcon from '../assets/dashboard-icon.png'
import friendsIcon from '../assets/friends.png'
import matchmakingIcon from '../assets/matchmaking-icon.png'
import streamingIcon from '../assets/streaming.png'
import homeIcon from '../assets/home.png'
import avatar2 from '../assets/avatar2.png'
import LogoutIcon from '../assets/log-out.png';
import collapseIcon from '../assets/collapse-nav.png';

import { Box } from '@mui/system';
import { Button2FA } from './Button2FA';
import { setCollapse } from '../store/collapseNavReducer';
import { NavbarCollapsed } from './NavbarCollapsed';
import { InvitationsMenu } from './InvitationsMenu';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TwoFADialog from './2FA/TwoFADialog';
import { TwoFAInput } from './2FA/TwoFAInput';
import { getProfileNavbar, ProfileNavData } from '../requests/home';
import axios from 'axios';

export let getInterface = (currentRoute: string): string => {
    switch (currentRoute) {
        case '/home': return "Home"
        case '/dashboard': return "Dashboard";
        case '/chatRoom': return "Chat Room";
        case '/instantMessaging': return "Instant Messaging";
        case '/matchmaking': return "Matchmaking";
        case '/liveMatchs': return "Live Games";
        case '/login': return "Log Out";
        default: return "Home";
    }
};
const initState: ProfileNavData = {} as ProfileNavData;

export const NavBarNew = () => {
    const userState = useSelector((state: RootState) => state.user);
    const logged_user = userState.login;
    const is_collapsedNav = useSelector((state: RootState) => state.collapseNav).is_collapsed;
    const [info_user, setInfoUser] = useState(initState);
    let avatar: File;

    const handleUploadAvatar = (avatar_uploaded: File) => {
        axios.post(process.env.REACT_APP_SERVER_IP + '/profile/avatar', { avatar: avatar_uploaded }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    useEffect(() => {
        getProfileNavbar().then((value) => {
            if (typeof (value) === typeof (initState)) {
                const data = value as ProfileNavData;
                setInfoUser(data);
            }
        })
    }, [])

    return (
        <Box >
            {is_collapsedNav && <NavbarCollapsed />}
            {!is_collapsedNav &&
                <Stack height="100vh" width="240px" justifyContent="space-between"
                    sx={{ backgroundColor: "#303465" }}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1.8}
                        sx={{ padding: "3.3%", paddingTop: "5%" }}>
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                                <IconButton component="label" sx={{ background: "#0564FC", width: "25px", height: "25px" }}>
                                    <EditIcon sx={{ width: "18px" }} />
                                    <input hidden accept="image/*" type="file" id='avatar' onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        if (event.target.files)
                                            handleUploadAvatar(event.target.files[0]);
                                    }} />
                                </IconButton>
                            }>
                            <Avatar
                                variant="circular"
                                sx={{
                                    height: '60px',
                                    width: '60px',
                                    backgroundColor: "#FFF",
                                    border: "3px solid #535995",
                                }}
                                alt="Lion" src={userState.avatar} imgProps={{ style: { width: 'auto' } }} />
                        </Badge>
                        <Stack justifyContent="space-between" alignItems="flex-start" spacing={0.25}>
                            <Typography
                                className='truncate-typo'
                                width='100%'
                                fontWeight="700"
                                fontSize="1.4rem"
                                fontFamily="Lato"
                                lineHeight="130%">
                                {logged_user}
                            </Typography>
                            <Stack direction="row" spacing={0.6}>
                                <SportsEsportsIcon sx={{ width: "18px", paddingTop: "3%" }} />
                                <Typography
                                    sx={{
                                        color: '#ADADAD',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        paddingTop: '1.2px',
                                    }}>
                                    Level {info_user.level}</Typography>
                                <Box paddingLeft="23px" paddingTop="3px"><InvitationsMenu count_invit={info_user.invit_count} /></Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        divider={<Divider orientation="horizontal" flexItem />}>
                        <CustomButton route='/home' _icon={homeIcon} />
                        <CustomButton route='/dashboard' _icon={dashboardIcon} />
                        <CustomButton route='/chatRoom' _icon={roomIcon} />
                        <CustomButton route='/instantMessaging' _icon={messengerIcon} />
                        {/* <CustomButton _name={InterfaceEnum.Friends} _icon={friendsIcon} /> */}
                        <CustomButton route='/matchmaking' _icon={matchmakingIcon} />
                        <CustomButton route='/liveMatchs' _icon={streamingIcon} />
                    </Stack>
                    <Box>
                        <Box sx={{ marginBottom: "20%" }}><Button2FA verified={info_user.tfa} /></Box>
                        <Collapse />
                        <Divider orientation="horizontal" flexItem />
                        <CustomButton route='/login' _icon={LogoutIcon} />
                    </Box>
                </Stack>}

            <TwoFADialog enable={!info_user.tfa}>
                <TwoFAInput enable={!info_user.tfa} />
            </TwoFADialog>

        </Box>
        // </Slide>
    )
}

export interface ButtonProps {
    route: string,
    _icon: string,
}

const CustomButton = ({ route, _icon }: ButtonProps) => {
    // const currentInterface = useSelector((state: RootState) => state.interfaces).current;
    const navigate = useNavigate();
    const location = useLocation();

    // const location = useLocation(); // handle locations
    // let handleNavigation = (interfaceEnum: InterfaceEnum) => {
    //     switch (interfaceEnum) {
    //         case InterfaceEnum.Home: navigate('/'); break;
    //         case InterfaceEnum.Dashboard: navigate('/dashboard'); break;
    //         case InterfaceEnum.ChatRoom: navigate('/chatRoom'); break;
    //         case InterfaceEnum.InstantMessaging: navigate('/instantMessaging'); break;
    //         case InterfaceEnum.Matchmaking: navigate('/matchmaking'); break;
    //         case InterfaceEnum.LiveGames: navigate('/liveMatchs'); break;
    //         case InterfaceEnum.Logout: navigate('/login'); break;
    //         default: navigate('/'); break;
    //     }
    // };

    let backgroundButton = location.pathname === route ? "#543EC0" : "#303465";
    return (
        <div style={{ backgroundColor: backgroundButton }}
            onClick={() => {
                // dispatch(setCurrentInterface(_name)); handleNavigation(_name)
                navigate(route);
            }}>
            <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row" sx={{
                paddingLeft: "10px", cursor: "pointer", height: "44px", ":hover": { backgroundColor: "#3F5274" }
            }}>
                <Avatar src={_icon} style={{ padding: "3.5%" }} />
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '109.52%',
                }}>
                    {getInterface(route)}
                </Typography>
            </Stack>
        </div>
    )
}

const Collapse = () => {
    const dispatch = useDispatch();
    return (
        <Stack alignItems="center" justifyContent="flex-start" spacing={2} direction="row"
            sx={{
                paddingLeft: "6px", cursor: "pointer", height: "44px", backgroundColor: "#3F5274",
                ":hover": { backgroundColor: "#3F4478" }
            }}
            onClick={() => { dispatch(setCollapse(true)) }}>
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