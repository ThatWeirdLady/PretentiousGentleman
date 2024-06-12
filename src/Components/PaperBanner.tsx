import { Box, Paper, Typography } from "@mui/material";
import React, { CSSProperties } from "react";

interface PaperBannerProps {
  backgroundColor: CSSProperties["backgroundColor"];
  content: string;
}

const PaperBanner = (props: PaperBannerProps) => {
  const backgroundColor = props.backgroundColor;
  const content = props.content;
  return (
    <Box
      mt={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        borderColor: "whitesmoke",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          backgroundColor: backgroundColor,
          width: "80%",
          height: "400",
        }}
      >
        <Typography
          variant="h2"
          fontFamily={"Serif"}
          fontStyle={"Georgia"}
          color={"whitesmoke"}
          sx={{ textShadow: "2px 2px 4px #000000" }}
          m={2}
        >
          {content}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PaperBanner;
