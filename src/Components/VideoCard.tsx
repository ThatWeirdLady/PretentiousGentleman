import { Box } from "@mui/material";
import { CSSProperties } from "react";

interface VideoCardProps {
  title: string;
  vid: string;
  backgroundColor: CSSProperties["backgroundColor"];
}

const ratio = 9 / 16;
export const ytVideoWidth = 560;
const VideoCard = (props: VideoCardProps) => {
  const title = props.title;
  const vid = props.vid;
  const width = Math.min(window.innerWidth, ytVideoWidth) - 16 * 2.5;
  const height = ratio * width;
  return (
    <Box
      sx={{ p: 2, width: "100%", display: "flex", justifyContent: "center" }}
    >
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
