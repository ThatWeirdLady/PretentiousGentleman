import { Card, Typography } from '@mui/material'
import React from 'react'

interface ImageCardProps {
    img: string;
    title: string;
    content: string;
}

const ImageCard = (props: ImageCardProps) => {
    const img = props.img;
    const title = props.title;
    const content = props.content;
    return (

        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <Typography variant='body1'>{title}</Typography>
            <img src={img} width={200} height={200}></img>
            <Typography variant='body2'>{content}</Typography>
        </Card>

    )
}

export default ImageCard