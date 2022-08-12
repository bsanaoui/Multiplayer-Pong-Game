import { Avatar, Stack } from "@mui/material"
import Header from "./Header"
import ProtectedRooms from "./ProtectedRooms"
import PublicRooms from "./PublicRooms"

const Main = () => {
    return (
        <Stack spacing={2}
            sx={{
                height: '100vh',
            }}
        >
            <Header></Header>
            <Stack
                spacing={3}
                sx={{
                    margin:"50px"
                }}>
                <PublicRooms kind="Public rooms"></PublicRooms>
                <PublicRooms kind="Protected rooms"></PublicRooms>
            </Stack>
        </Stack>
    )
}

export default Main