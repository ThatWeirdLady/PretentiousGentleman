import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";

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
      }}
    >
      <Box
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
      </Box>
    </Box>
  );
};

export default PaperBanner;
