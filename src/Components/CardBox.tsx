import { Box, Card, CardActionArea, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react';
import { paleGreen } from '..';
import prideImg from "./images/Pride.jpg";


interface CardBoxProps {
    backgroundColor: string;
    children: any;
}


const CardBox = (props: CardBoxProps) => {
    const backgroundColor = props.backgroundColor;
    const children = props.children;
    return (
        <Box mt={2}>
            <Paper elevation={5} sx={{
                backgroundColor: backgroundColor, height: "500", width: "100%", display: "flex", justifyContent: "space-around"
            }} >
                {children}
            </Paper></Box>
    )
}

export default CardBox