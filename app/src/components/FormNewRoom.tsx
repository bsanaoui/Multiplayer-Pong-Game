import Paper from "@mui/material/Paper"
import Grid from '@mui/material/Grid';
import { ErrorMessage, Field, Form, Formik } from "formik"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from 'yup'

const FormNewRoom = () => {
    const paperStyle = { padding: '0px 15px 40px 15px', width: 320 }
    const btnStyle = { marginTop: '10px' }
    const initialValues = {
        room_name: '',
        kind: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        room_name: Yup.string().min(5, "It's too short").required("Required"),
        kind: Yup.string().required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8")
    })
    
    const onSubmit = (values: any, props: any) => {

        alert(JSON.stringify(values, null, 2))
        props.resetForm()
    }

    return (
        <Grid>
            <Paper elevation={30} style={paperStyle}>
                <Grid alignContent='center' marginBottom='25px'>
                    <Typography variant='caption'>Fill the form to create a new room</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} name='room_name' label='Room Name' fullWidth
                                error={props.errors.room_name && props.touched.room_name}
                                helperText={<ErrorMessage name='room_name' />} required />

                            <div id="my-radio-group" style={{margin:"20px 4px 7px"}}>Room Visibility</div>
                            <div role="group" aria-labelledby="my-radio-group" style={{marginBottom:"20px"}}>
                                <label>
                                    <Field type="radio" name="kind" value="public" />
                                    Public
                                </label>
                                <label>
                                    <Field type="radio" name="kind" value="protected" />
                                    Protected
                                </label>
                                <label>
                                    <Field type="radio" name="kind" value="private" />
                                    Private
                                </label>
                            </div>

                            {props.values.kind === "protected" &&
                                < Field as={TextField} name='password' label='Password' type='password' fullWidth
                            error={props.errors.password && props.touched.password}
                            helperText={<ErrorMessage name='password' />} required/> 
                            }

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Create Room</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default FormNewRoom