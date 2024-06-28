import { Card } from "@mui/material";
import { CSSProperties, useState } from "react";
import ImageModal from "./ImageModal";

interface ArtworkCardProps {
  img: string;
  title?: string;
  backgroundColor: CSSProperties["backgroundColor"];
  alt?: string;
}

const ArtworkCard = (props: ArtworkCardProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  function isMobile() {
    return window.matchMedia("(max-width: 700px)").matches;
  }

  function onImageClick() {
    if (isMobile()) return;
    setOpen(true);
  }

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
      <img
        src={img}
        width={200}
        height={200}
        alt={alt}
        onClick={onImageClick}
      />
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
