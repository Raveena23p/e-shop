import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const steps = [
    'Items',
    'Add Address',
    'Confirm Order',
];
export default function AddProduct() {
    return (
        <div> <div> <Box sx={{ width: '100%', marginTop: 10, marginRight: 10 }}>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box></div>
            <div style={{ display: 'flex', marginTop: 50, marginRight: 10, padding: '0 50px', alignItems: "stretch" }}>
                <Grid container justifyContent="center" spacing={0} alignItems={"stretch"}>
                    <Grid item xs={6}>
                        <Paper style={{ height: '100%', padding: 20 }}>
                            <div style={{ textAlign: 'left' }}>
                                <h2>Shoes</h2>
                                <p>Quantity: <b>1</b></p>
                                <p>Category: <b>Footwear</b></p>
                                <p>wndr-13 sports shoes for men|Latest stylish Casual sport shoes for men|running shoes
                                    for boys|Lace up Lightweight pink shoes for running, walking, gym, trekking, hiking &
                                    party
                                </p>
                                <p style={{ color: 'red' }}>Total Price : Rs.7000</p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={{ height: '100%', padding: 20 }}>
                            <div style={{ textAlign: 'left' }}>
                                <h2>Address Details:</h2>
                                <p>Lucknow Home</p>
                                <p>Contact Number: 7903710346</p>
                                <p>Police Line,</p>
                                <p>Lucknow</p>
                                <p>Uttar Pradesh</p>
                                <p>723990</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginTop: 60, display: 'flex', justifyContent: 'center' }}><Button variant="text">BACK</Button>
                <Button variant="contained">PLACE ORDER </Button></div>
        </div>)
}


