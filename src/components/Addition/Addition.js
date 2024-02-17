import React from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Category } from "@mui/icons-material";

export default function Addition() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center'
        }}>
            <div style={{ width: 350, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                <div><h2> Add Product</h2></div>
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Name" variant="outlined" />
                <Box sx={{ minWidth: 350 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Apparel</MenuItem>
                            <MenuItem value={20}>Furniture</MenuItem>
                            <MenuItem value={30}>Personal Care</MenuItem>
                            <MenuItem value={30}>Electronics</MenuItem>
                            <MenuItem value={30}>Footwear</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Manufucturer" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Available items" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Price" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Image URL" variant="outlined" />
                <TextField sx={{ width: '100%' }} id="outlined-basic" required label="Product Description" variant="outlined" />
                <Button variant="contained" style={{ width: '100%' }}>Save Product</Button>
            </div>

        </div>

    )
}