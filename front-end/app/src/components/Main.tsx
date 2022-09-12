import { Stack } from "@mui/material"
import AllUsers from "./AllUsers"
import Header from "./Header"
import PublicRooms from "./PublicRooms"


const Main = () => {
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

export default Main