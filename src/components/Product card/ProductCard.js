import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
export default function ProductCard({ item }) {
    console.log(item);
    return (
        <Card sx={{ maxWidth: 350, aspectRatio: 0.75, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
                <img
                    src={item.image}
                    alt="Shoe"
                    style={{
                        width: '100%',
                        aspectRatio: 1.5,
                        objectFit: 'cover'
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: 20, marginBottom: '20px' }}>
                    <div>{item.title}</div>
                    <div>Rs.{item.price}</div>
                </div>
                <div>
                    {item.description}
                </div>
            </CardContent>
            <CardActions>

                <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
                <Button variant="contained">BUY</Button>
                <div>
                <IconButton aria-label="edit">
                    <ModeEditIcon/>
                </IconButton>
                <IconButton aria-label="delete">
             <DeleteIcon />
                </IconButton>
                </div>
                </div>

            </CardActions>
        </Card>
    )
}