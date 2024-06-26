import { Box, Modal, Typography } from "@mui/material";
import React from "react";

interface ImageModalProps {
  img: string;
  open: boolean;
  onClose: () => void;
  alt?: string;
  title?: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ImageModal = (props: ImageModalProps) => {
  const img = props.img;
  const alt = props.alt;
  const title = props.title;

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={style}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "regular",
            fontSize: "25px",
          }}
        >
          {title}
        </Typography>
        <img src={img} alt={alt}></img>
      </Box>
    </Modal>
  );
};

export default ImageModal;
