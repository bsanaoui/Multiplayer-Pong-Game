import { Avatar, Stack } from "@mui/material"
import AllUsers from "./AllUsers"
import Header from "./Header"
import ProtectedRooms from "./ProtectedRooms"
import PublicRooms from "./PublicRooms"
import User from "./User"

const Main = () => {
    return (
        // <Stack spacing={2}
        //     sx={{
        //         height: '100vh',
        //     }}
        // >
        <div>
            <Header/>
            <Stack
                marginTop='100px'
                marginLeft='30px'
                spacing={3}>
                <PublicRooms kind="Public rooms" />
                <PublicRooms kind="Protected rooms" />
            </Stack>
            <AllUsers />
        </div>
        // </Stack>
    )
}

export default Main