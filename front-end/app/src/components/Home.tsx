import { Stack } from "@mui/material"
import { useDispatch } from "react-redux"
import { setOpenDialog2FA } from "../store/openDialogReducer"
import TwoFADialog from "./2FA/TwoFADialog"
import { TwoFAInput } from "./2FA/TwoFAInput"
import AllUsers from "./AllUsers"
import Header from "./Header"
import PublicRooms from "./PublicRooms"


const Home = () => {
    const dispatch = useDispatch();
    
    return (

        <div>
            <Header/>
            <Stack
                marginTop='45px'
                marginLeft='6%'
                spacing={4}>
                <PublicRooms kind="Public rooms"/>
                <PublicRooms kind="Protected rooms"/>
            </Stack>
            <AllUsers />
        </div>
    )
}

export default Home