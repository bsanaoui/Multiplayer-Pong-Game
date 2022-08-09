import { Avatar, Stack } from "@mui/material"
import Header from "./Header"
import ProtectedRooms from "./ProtectedRooms"
import PublicRooms from "./PublicRooms"

const Main = () => {
    return (
        <Stack spacing={2}
                sx={{
                    height:'100vh'
                }}>
            <Header></Header>
            <PublicRooms></PublicRooms>
            <ProtectedRooms></ProtectedRooms>
        </Stack>
    )
}

export default Main