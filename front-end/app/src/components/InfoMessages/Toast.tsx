import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import {data, P_data} from "../DropMenus/DropMenuUser";
import {RootState} from "../../store";
import {useEffect} from "react";
import {handleStoreDataGame} from "../../store/gameReducer";

export const handleToastMsg = (status: boolean, msg: string) => {
    if (status)
        toast.success(msg);
    else
        toast.warning(msg);
};



// const handleToastGame = (data:data) => {
//     toast.info(CustomMsg(data));

//
// };

// const DispatchDataGame = (props:data) => {
//     // const dispatch = useDispatch();
//     // const data_accept_game = useSelector((state: RootState) => state.game).data_accept;
//     const socket_global = useSelector((state: RootState) => state.socketglobal).socket_global;
//     const handleAcceptGame = () => {
//         socket_global.emit('accepted', props);
//     }
//     useEffect(() => {
//         handleAcceptGame();
//     },[])
//     return(<div></div>)
// }


// const CustomMsg = (props:data) => {
//
//     return (<div>
//         <p> {props.P1.username} want to play with you in mode {props.mod}</p>
//         <button onClick={() => {handleClickAccept()}}>Accept</button>
//         <button >Cancel</button>
//     </div>)
// }