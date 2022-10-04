import { Stack } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { RootState } from "../store"
import { setOpenDialog2FA } from "../store/openDialogReducer"
import TwoFADialog from "./2FA/TwoFADialog"
import { TwoFAInput } from "./2FA/TwoFAInput"
import AllUsers from "./AllUsers"
import { P_data } from "./DropMenus/DropMenuUser"
import Header from "./Header"
// import { handleToastGame } from "./InfoMessages/Toast"
import PublicRooms from "./PublicRooms"


const Home = () => {
    return (

        <div>
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