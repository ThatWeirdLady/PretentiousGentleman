import { Card } from "@mui/material";
import React, { CSSProperties } from "react";
import ImageModal from "./ImageModal";

interface ArtworkCardProps {
  img: string;
  title?: string;
  backgroundColor: CSSProperties["backgroundColor"];
  alt?: string;
}

const ArtworkCard = (props: ArtworkCardProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const img = props.img;
  const backgroundColor = props.backgroundColor;
  const alt = props.alt;

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
      <img src={img} width={200} height={200} alt={alt} onClick={handleOpen} />
      <ImageModal
        open={open}
        onClose={handleClose}
        img={img}
        title={props.title}
      />
    </Card>
  );
};

export default ArtworkCard;
