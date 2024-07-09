import { Typography, TypographyProps } from "@mui/material";

export const ParallaxText = (props: TypographyProps) => (
  <Typography
    variant="h2"
    fontFamily={"Serif"}
    fontStyle={"Georgia"}
    color={"whitesmoke"}
    sx={{ textShadow: "2px 2px 4px #000000" }}
    m={2}
  >
    {props.children}
  </Typography>
);
