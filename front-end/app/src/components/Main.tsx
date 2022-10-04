import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { P_data } from './DropMenus/DropMenuUser';
import { handleToastGame } from './InfoMessages/Toast';

const Main = () => {
    // const dispatch = useDispatch();
    const socket_global = useSelector((state: RootState) => state.socketglobal).socket_global;

    const handleListenerGame = () => {
        socket_global.on('gameInvite', (data: { user: P_data, mod: number }) => {
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

    return(<div></div>);

}

export default Main