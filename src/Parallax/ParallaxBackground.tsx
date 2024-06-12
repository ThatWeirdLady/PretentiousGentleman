import React, { CSSProperties } from "react";
import "./ParallaxBackground.css";

interface IParallaxBackgroundProps {
  url: string;
  height?: CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
}

export const ParallaxBackground = (props: IParallaxBackgroundProps) => {
  const url = props.url;
  const height = props.height;
  const minHeight = props.minHeight;
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${url})`,
        height: height,
        minHeight: minHeight,
      }}
    />
  );
};
