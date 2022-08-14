import { Avatar, Stack } from "@mui/material"
import AllUsers from "./AllUsers"
import Header from "./Header"
import ProtectedRooms from "./ProtectedRooms"
import PublicRooms from "./PublicRooms"
import User from "./User"

const Main = () => {
    return (
        <div>
            <Header/>
            <Stack
                marginTop='45px'
                marginLeft='50px'
                spacing={3}>
                <PublicRooms kind="Public rooms" />
                <PublicRooms kind="Protected rooms" />
            </Stack>
            <AllUsers />
        </div>
    )
}

export default Main