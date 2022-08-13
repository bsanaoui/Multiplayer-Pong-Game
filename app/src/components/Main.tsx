import { Avatar, Stack } from "@mui/material"
import AllUsers from "./AllUsers"
import Header from "./Header"
import ProtectedRooms from "./ProtectedRooms"
import PublicRooms from "./PublicRooms"
import User from "./User"

const Main = () => {
    return (
        <Stack spacing={2}
            sx={{
                // height: '100vh',
            }}
        >
            {/* <Header/> */}
            {/* <Stack
                spacing={3}
                sx={{
                    margin:"50px"
                }}>
                <PublicRooms kind="Public rooms"/>
                <PublicRooms kind="Protected rooms"/>
            </Stack> */}
            <AllUsers/>
        </Stack>
    )
}

export default Main