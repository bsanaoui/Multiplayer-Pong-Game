import { Button, Input } from '@mui/material';
import { Form } from 'formik';
import React from 'react'

const LoginPage = (props: {handleConnection: Function, username: string, setUsername: Function}) => {
    return (
        <form className="enter-username-form" onSubmit={e => {
            e.preventDefault();
            props.handleConnection();
        }}>
            <Input 
                type="text" 
                value={props.username} 
                onChange={e => props.setUsername(e.target.value)} 
                placeholder="Enter a username..."
                required={true}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default LoginPage