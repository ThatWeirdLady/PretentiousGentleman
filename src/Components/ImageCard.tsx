import { Card, Typography } from "@mui/material";
import React, { CSSProperties } from "react";

interface ImageCardProps {
  img?: string;
  title: string;
  content: string;
  backgroundColor: CSSProperties["backgroundColor"];
}

const ImageCard = (props: ImageCardProps) => {
  const img = props.img;
  const title = props.title;
  const content = props.content;
  const backgroundColor = props.backgroundColor;
  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        margin: 2,
        backgroundColor: backgroundColor,
      }}
    >
      <Typography className="ImageCard" variant={"h4"}>
        {title}
      </Typography>
      <img src={img} width={200} height={200}></img>
      <Typography className="ImageCard" variant="body1">
        {content}
      </Typography>
    </Card>
  );
};

export default ImageCard;
