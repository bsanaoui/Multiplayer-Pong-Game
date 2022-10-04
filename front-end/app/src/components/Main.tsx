import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {data, P_data} from './DropMenus/DropMenuUser';
import {toast} from "react-toastify";
import { playInvitedGame } from '../store/gameReducer';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();
    const socket_global = useSelector((state: RootState) => state.socketglobal).socket_global;
    const navigate = useNavigate();

    const handleClickAccept = (data:data) => {
        socket_global.emit('accepted', data);
    }
    
    const CustomMsg = (props:data) => {
        return (<div>
            <p> {props.P1.username} want to play with you in mode {props.mod}</p>
            <button onClick={() => {handleClickAccept(props)}}>Accept</button>
            <button >Cancel</button>
        </div>)
    }

    const handleToastGame = (data:data) => {
        toast.info(CustomMsg(data));
    };

    const handleListenerGame = () => {
        socket_global.on('gameInvite', (data:data) => {
            console.log("inviiite", data);
            handleToastGame(data);
        })
    }

    useEffect(() => {
        if (socket_global)
            handleListenerGame();
        return (() => {
            socket_global.off("gameInvite");
        })
    },)


    const handleGameStart = () => {
        socket_global.on('start', (data:{key:string, mod:number}) => {
            console.log("KEEEEY", data);
            dispatch(playInvitedGame({key:data.key, mode:data.mod}));
            navigate('/matchmaking');
        })
    }

    useEffect(() => {
        if (socket_global)
            handleGameStart();
        return (() => {
            socket_global.off("start");
        })
    },)

    return(<div></div>);

}

export default Main
