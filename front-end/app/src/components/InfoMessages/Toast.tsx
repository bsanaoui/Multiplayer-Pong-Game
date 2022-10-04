import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { P_data } from "../DropMenus/DropMenuUser";

export const handleToastMsg = (status: boolean, msg: string) => {
    if (status)
        toast.success(msg);
    else
        toast.warning(msg);
};



export const handleToastGame = (data:{ user: P_data, mod: number }) => {
    toast.info(CustomMsg(data));
};


const CustomMsg = (props:{ user: P_data, mod: number }) => {
    // const dispatch = useDispatch();
    return (<div>
        <p> {props.user.username} want to play with you in mode {props.mod}</p>
        <button>Accept</button>
        <button >Cancel</button>
    </div>)
}