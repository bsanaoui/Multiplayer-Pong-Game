import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {data, P_data} from './DropMenus/DropMenuUser';
// import { handleToastGame } from './InfoMessages/Toast';
import {handleStoreDataGame} from "../store/gameReducer";
import {toast} from "react-toastify";

const Main = () => {
    const dispatch = useDispatch();
    const socket_global = useSelector((state: RootState) => state.socketglobal).socket_global;
    let global_data: data;

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
            global_data = data
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
            // dispatch(handleStoreDataGame(data));
            console.log("KEEEEY", data);
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