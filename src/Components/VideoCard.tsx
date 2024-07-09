import { Box } from "@mui/material";
import { CSSProperties } from "react";

interface VideoCardProps {
  title: string;
  vid: string;
  backgroundColor: CSSProperties["backgroundColor"];
}

const ratio = 9 / 16;
const VideoCard = (props: VideoCardProps) => {
  const title = props.title;
  const vid = props.vid;
  const width = Math.min(window.innerWidth, 560) - 16 * 2.5;
  const height = ratio * width;
  return (
    <Box sx={{ m: 2, width: width }}>
      <iframe
        width={width}
        height={height}
        src={vid}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </Box>
  );
};

export default VideoCard;
