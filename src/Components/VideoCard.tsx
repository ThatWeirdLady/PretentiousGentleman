import { Card } from "@mui/material";
import React, { CSSProperties } from "react";

interface VideoCardProps {
  title: string;
  vid: string;
  backgroundColor: CSSProperties["backgroundColor"];
}
const licorice = "#130303";
const VideoCard = (props: VideoCardProps) => {
  const title = props.title;
  const vid = props.vid;
  const backgroundColor = licorice;
  return (
    <Card
      sx={{
        minWidth: 400,
        maxWidth: 400,
        margin: 2,
        backgroundColor: backgroundColor,
        border: "grey",
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      <iframe
        width="400"
        height="400"
        src={vid}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </Card>
  );
};

export default VideoCard;
