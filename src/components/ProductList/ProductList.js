import React from "react";
import ProductCard from "../Product card/ProductCard";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Select from '@mui/material/Select';
import { Category } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from '@mui/material';

export default function ProductList() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [Category, setfilter] = React.useState('');

    const handlemodification = (event) => {
        setfilter(event.target.value);
    };
    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="ALL" />
                    <Tab label="APPAREL" />
                    <Tab label="ELECTRONICS" />
                    <Tab label="FOOTWEAR" />
                    <Tab label="PERSONAL CARE" />
                </Tabs>
            </Box>
            <div>
            <div style={{ width: 350, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', marginLeft:50, marginTop:20, marginBottom:20 }}>
                <Box sx={{ minWidth: 350 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Category}
                            label="Category"
                            onChange={handlemodification}
                        >
                            <MenuItem value={10}>Default</MenuItem>
                            <MenuItem value={20}>Price:High to Low</MenuItem>
                            <MenuItem value={30}>Price:Low to High</MenuItem>
                            <MenuItem value={30}>Newest</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

</div>


                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 40 }}>
                    {products.map(item =>
                        <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
                            <ProductCard item={item} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

const products = [
    {
        title: 'Sketcher Shoe',
        image: 'http://localhost:3000/Images/SketchersShoe.webp',
        price: 9000,
        description: 'Internationally renowned muralist James Goldcrown brings his collaboration. Show your creative and colorful style with Skechers x JGoldcrown: Skechers Street Uno - Dripping in love.'
    },
    {
        title: 'Addidas Shoe',
        image: 'http://localhost:3000/Images/AddidasShoes.webp',
        price: 5000,
        description: 'Experience unmatched comfort and style with the Adidas UltraBoost 5.0. Featuring Boost technology for responsive cushioning and a breathable fit, these shoes are your perfect companion for any activity. '
    },
    {
        title: 'Puma Shoe',
        image: 'http://localhost:3000/Images/PumaShoes.webp',
        price: 7000,
        description: 'Meet the Puma Ignite Pro—where performance meets style. Featuring Ignite foam for responsive cushioning and breathability.Ignite your performance with Puma.'
    },
    {
        title: 'Nike Shoe',
        image: 'http://localhost:3000/Images/NikeShoes.webp',
        price: 6000,
        description: 'Nike Air Max 2024, where legendary comfort meets cutting-edge design. With its signature Air Max cushioning, these shoes offer all-day support. Step into the future of footwear with Nike Air Max 2024.'
    },
    {
        title: 'Reebok Shoe',
        image: 'http://localhost:3000/Images/ReebokShoes.webp',
        price: 10000,
        description: 'Introducing the Reebok FlexStride: engineered for dynamic performance. Its lightweight construction provide agility and breathability, while innovative Flexweave technology ensures targeted support for every workout.'
    },
    {
        title: 'Bata Shoe',
        image: 'http://localhost:3000/Images/BataShoes.webp',
        price: 3000,
        description: 'Introducing Bata Comfort Plus, the perfect blend of style and support for your everyday adventures. Crafted with premium materials and innovative design,comfort and durability. Step confidently into any occasion with Bata Comfort Plus.'
    }
]