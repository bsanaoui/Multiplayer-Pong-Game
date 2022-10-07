import { Stack } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { RootState } from "../store"
import { setOpenDialog2FA } from "../store/openDialogReducer"
import TwoFADialog from "./2FA/TwoFADialog"
import { TwoFAInput } from "./2FA/TwoFAInput"
import AllUsers from "./AllUsers"
import { P_data } from "./DropMenus/DropMenuUser"
import Header from "./Header"
// import { handleToastGame } from "./InfoMessages/Toast"
import PublicRooms from "./PublicRooms"

// const CustomMsg = () => {
//     return (<div >
//         <p>Zineb want to play with you in mode Rush</p>
//         <button >Accept</button>
//         <button >Cancel</button>
//     </div>)
// }


const Home = () => {
    const is_collapse = useSelector((state: RootState) => state.collapseNav).is_collapsed;

    // useEffect(() => {
    //     toast.info(CustomMsg(), {className: "inviteGame"});
    // },[]);

    

    return (
        <div style={{
            flex:"0 0 100%",
            maxWidth: (!is_collapse) ? "calc(100% - 240px)" : "calc(100% - 70px)",

        }}>
            <Header />
            <Stack
                marginTop='45px'
                marginLeft='6%'
                spacing={4}>
                <PublicRooms kind="Public rooms" />
                <PublicRooms kind="Protected rooms" />
            </Stack>
            <AllUsers />
        </div>
    )
}

export default Home
/*
{status : false , msg : "password incorrect"}   , 

{status : true , }

*/