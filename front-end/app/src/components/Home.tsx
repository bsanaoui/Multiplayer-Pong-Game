import { Stack } from "@mui/material"
import TwoFADialog from "./2FA/TwoFADialog"
import { TwoFAInput } from "./2FA/TwoFAInput"
import AllUsers from "./AllUsers"
import Header from "./Header"
import PublicRooms from "./PublicRooms"


const Home = () => {
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
        {/* <TwoFADialog>
            <TwoFAInput enable={true}/>
        </TwoFADialog> */}

        </div>
    )
}

export default Home