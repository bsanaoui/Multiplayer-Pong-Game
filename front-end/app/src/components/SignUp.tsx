import Paper from "@mui/material/Paper"
import Grid from '@mui/material/Grid';
import { ErrorMessage, Field, Form, Formik } from "formik"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from 'yup'
import { Box } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import backgroundForm from '../assets/background-table.png'

interface UserAccount {
    user_name: string,
    avatar: File,
}

const SignUp = () => {
    const paperStyle = { padding: '0px 15px 40px 15px', width: 320 }
    const btnStyle = { marginTop: '25px' }
    const navigate = useNavigate();

    const initialValues: UserAccount = { user_name: '', avatar: {} as File };

    const validationSchema = Yup.object().shape({
        user_name: Yup.string().min(8, "It's too short"),

    })

    const onSubmit = (values: UserAccount, props: any) => {
        console.log(values);
        if (values.avatar)
            axios.post(process.env.REACT_APP_SERVER_IP + '/profile/avatar', { avatar: values.avatar }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        if (values.user_name)
            axios.post(process.env.REACT_APP_SERVER_IP + '/profile/change_username', { username: values.user_name }, {
                withCredentials: true,
            })
        navigate('/home');
        props.resetForm()
    }

    return (

        <Box
            sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: "100vw",
                height: "100vh",
                background: "linear-gradient( 116.27deg, #191D45 31.5%, #4044A5 61.17% )",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Box height="100px" alignContent='center' marginBottom='20px'>
                        <Typography textAlign="center" variant='h6'>tesssssst Welcome To PongGame Online ?????? DEbug</Typography>
                    </Box>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} name='user_name' label='Username' fullWidth
                                    error={props.errors.user_name && props.touched.user_name}
                                    helperText={<ErrorMessage name='user name' />} />
                                <Button variant="contained" component="label" sx={{ marginTop: "8%" }} startIcon={<PhotoCamera />}>
                                    Upload Your Avatar
                                    <input hidden accept="image/*" multiple type="file" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        if (event.target.files)
                                            props.setFieldValue("avatar", event.target.files[0]);
                                    }} />
                                </Button>
                                <Button type='submit' style={btnStyle} variant='contained' fullWidth
                                    color='primary'>Sign Up</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </Box>
    )
}

export default SignUp
