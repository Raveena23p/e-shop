import React from "react"
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function Modify() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center'
        }}>
            <div style={{ width: 350, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                <div><h2> Modify Product</h2></div>
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Name" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Category" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Manufucturer" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Available items" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Price" variant="outlined" />
                 <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Image URL" variant="outlined" />
                 <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Product Description" variant="outlined" />
                <Button variant="contained" style={{ width: '100%' }}>Modify Product</Button>
            </div>
        </div>
    )
}