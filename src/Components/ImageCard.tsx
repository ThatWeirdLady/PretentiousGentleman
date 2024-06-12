import { Card, Typography } from "@mui/material";
import React, { CSSProperties } from "react";

interface ImageCardProps {
  img?: string;
  title: string;
  content: string;
  backgroundColor: CSSProperties["backgroundColor"];
  alt?: string;
  link?: string;
}

const ImageCard = (props: ImageCardProps) => {
  const img = props.img;
  const title = props.title;
  const content = props.content;
  const backgroundColor = props.backgroundColor;
  const alt = props.alt;
  const link = props.link;

  const onImageClick = () => {
    if (!link) return;
    window.open(link, "_newtab");
  };
  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        margin: 2,
        backgroundColor: backgroundColor,
        border: "grey",
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      <Typography className="ImageCard" variant={"h4"}>
        {title}
      </Typography>
      <img
        src={img}
        width={200}
        height={200}
        alt={alt}
        onClick={onImageClick}
      />
      <Typography className="ImageCard" variant="body1">
        {content}
      </Typography>
    </Card>
  );
};

export default ImageCard;
