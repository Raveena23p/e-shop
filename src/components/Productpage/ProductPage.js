import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

export default function ProductPage(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
            <div>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="ALL" />
            <Tab label="APPAREL" />
            <Tab label="ELECTRONICS" />
            <Tab label="FOOTWEAR" />
            <Tab label="PERSONAL CARE" />
          </Tabs>
        </Box>
        <div style={{display: 'flex', justifyContent: 'center', height: '100%',minHeight: '25vh', paddingTop: '50px' }}> 
            <img src= "http://localhost:3000/Images/NikeShoes.webp" alt="Nike Shoes"style={{maxWidth: '350px', height: 'auto' }}/>
      <div style={{ marginLeft: '20px', textAlign:'left' }}>
        <h2>Nike Shoes <Chip style={{marginLeft:10}} label="Available quantity:170" color="primary" /></h2>
        <p>Category: <b>Footwear</b></p>
        <p> Lightweight with soft cushioning and good traction.</p>
        <p style={{color:'red'}}>Rs.6000</p>
        <p><TextField id="outlined-basic" required label="Enter quantity" variant="outlined" /></p>
        <Button variant="contained">PLACE ORDER</Button>
      </div>
    </div>
            </div>
    );
}