import React from "react";

interface iframeProps {
  title: string;
  src: string;
}

const ReadPDF = (props: iframeProps) => {
  const title = props.title;
  const src = props.src;
  return <iframe title={title} src={src}></iframe>;
};

export default ReadPDF;
