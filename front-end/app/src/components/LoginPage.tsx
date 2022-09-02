import { Button, Input } from '@mui/material';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from "../store/userReducer";


const LoginPage = () => {
    const dispatch = useDispatch();
    
    const [username, setUser] = useState("");

    return (
        <form className="enter-username-form" onSubmit={e => {
            e.preventDefault();
        }}>
            <Input
                type="text"
                // value={props.username} 
                onChange={e => setUser(e.target.value)}
                placeholder="Enter a username..."
                required={true}
            />
            <Button type="submit" onClick={() => dispatch(setUsername(username))}>Submit</Button>
        </form>
    )
}

export default LoginPage