import React from "react"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function SignIn() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center'
        }}>
            <div style={{ width: 350, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                <LockOutlinedIcon sx={{ backgroundColor: 'red', padding: 1, borderRadius: '100%' }} />
                <div> Sign In</div>
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Email Address" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Password" variant="outlined" />
                <Button variant="contained" style={{ width: '100%' }}>Sign up</Button>
                <a href="/" style={{textAlign: 'start', width: '100%'}}>Dont't have an account? Sign up </a>
            </div>
        </div>
    ) 
}