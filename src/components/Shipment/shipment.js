import React from "react"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function Shipment() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center'
        }}>
            <div style={{ width: 350, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                <div> Add Address</div>
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Name" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Contact Number" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Street" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="City" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="State" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Landmark" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Zip Code" variant="outlined" />
                <Button variant="contained" style={{ width: '100%' }}>Save Address</Button>
                <div style={{display: 'flex'}}><Button variant="text">Back</Button>
                <Button variant="contained">Next </Button></div>
            </div>
        </div>
    )
}