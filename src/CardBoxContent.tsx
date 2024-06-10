import { Box, Typography } from '@mui/material';
import React from 'react'

interface CardBoxContentProps {
    img: string;
    title: string;
    content: string;
    flip: boolean;
}

const CardBoxContent = (props: CardBoxContentProps) => {
    const img = props.img;
    const title = props.title;
    const content = props.content;
    const flip = props.flip;

    const TheImage = <img height="400" width="600" style={{ display: "flex", justifyContent: 'left', padding: "8px" }} src={img}/* CHANGE IMAGE HERE */ />;
    const TheText = <Box >
        <Typography sx={{ margin: 8 }} variant='h2'>{title}</Typography>
        <Typography variant='body2'>{content}</Typography>
    </Box>;
    if (flip) {
        return <>{TheText}{TheImage}</>
    }
    return <>{TheImage}{TheText}</>
}

export default CardBoxContent