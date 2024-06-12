import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import small_logo from "../images/small_logo.jpg";

const imgSize = 64;

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={small_logo} height={imgSize} width={imgSize} alt=""></img>
          </IconButton>
          <Typography
            textAlign={"center"}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "regular" }}
          >
            The Pretentious Gentleman
          </Typography>
          <Button color="inherit">About Me</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
