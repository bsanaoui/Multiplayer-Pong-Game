import { Avatar, Box, Button, Divider, Input, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import qr_test from './qr.png'
import code_qr_icon from '../../assets/code.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { sendCode2FA } from '../../requests/home'

let initImage: Buffer;

export const TwoFAInput = (props: { enable: boolean }) => {
    const [qr_image, setImage] = useState(initImage);
    const [input_code, setCode] = useState("");
    const url: string = "";

    const handleSentCode = () => {
        sendCode2FA(input_code);
    }

    const getImage = () => {
        axios
            .get(url, {
                responseType: 'arraybuffer'
            })
            .then(response => {
                const buffer = Buffer.from(response.data, 'base64');
                setImage(buffer);
            })
            .catch(ex => {
                console.error(ex);
            });
    }

    useEffect(() => {
        getImage();
    }, [])
    return (
        <Stack alignItems="center" spacing={2} paddingRight="3%" paddingLeft="3%"
            divider={<Divider orientation="horizontal" flexItem />}
            sx={{
                background: "#36393F",
                width: "520px",
            }}>
            <Stack direction="row" spacing={3} >
                <Box sx={{ background: "#FFF", width: "190px", height: "190px" }}>
                    <img src={qr_test} style={{ width: "185px", height: "185px" }} />
                    {/* <img src={`data:image/png;base64,${qr_image}`}
                        alt="QrCode" style={{ width: "185px", height: "185px" }} /> */}
                </Box>
                <Box paddingTop="10px">
                    <Typography variant="body2">SCAN THE QR CODE</Typography>
                    <Typography marginTop="15px" variant="body2">Open the authentication app and scan the image to</Typography>
                    <Typography marginTop="15px" variant="body2">Open the authentication app and scan the image to
                        the left, using your phone's camera.</Typography>
                </Box>
            </Stack>
            <Stack direction="row">
                <Box sx={{ width: "235px", height: "190px", margin: "auto", paddingTop: "20px", paddingLeft: "45px" }}>
                    <img src={code_qr_icon} style={{ width: "120px", height: "120px" }} />
                </Box>
                <Stack spacing={2}>
                    <Box paddingTop="10px">
                        <Typography variant="body2">LOGIN WITH YOUR CODE</Typography>
                        <Typography marginTop="15px" variant="body2">Enter the 6-digit verification code generated.</Typography>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <TextField id="outlined-basic" label="Code" variant="outlined"
                            onChange={e => setCode(e.target.value)} />
                        <Button variant="contained" color="info" style={{ width: "150px" }}
                        onClick={handleSentCode}>
                            Activate
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
