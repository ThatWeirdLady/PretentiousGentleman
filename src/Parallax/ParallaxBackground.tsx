import React, { CSSProperties } from "react";
import "./ParallaxBackground.css";
import { Typography } from "@mui/material";

interface IParallaxBackgroundProps {
  url: string;
  text?: string;
  height?: CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
}

export const ParallaxBackground = (props: IParallaxBackgroundProps) => {
  const url = props.url;
  const height = props.height;
  const minHeight = props.minHeight;
  const text = props.text;
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${url})`,
        height: height,
        minHeight: minHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text && (
        <Typography
          variant="h2"
          fontFamily={"Serif"}
          fontStyle={"Georgia"}
          color={"whitesmoke"}
          sx={{ textShadow: "2px 2px 4px #000000" }}
          m={2}
        >
          {text}
        </Typography>
      )}
    </div>
  );
};
