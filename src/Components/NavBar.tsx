import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import small_logo from "../images/small_logo.jpg";
import { Tab } from "../Tab";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { licorice } from "../App";

const imgSize = 64;

interface IProps {
  onPageChange: (nextPage: Tab) => void;
}

const NavBar = (props: IProps) => {
  const [sideOpen, setSideOpen] = useState(false);
  const onPageChange = props.onPageChange;

  function toHome() {
    onPageChange(Tab.HOME);
    setSideOpen(false);
  }

  function toAboutMe() {
    onPageChange(Tab.ABOUT);
    setSideOpen(false);
  }

  function toSupport() {
    onPageChange(Tab.SUPPORT);
    setSideOpen(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toHome}
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}
          >
            <img src={small_logo} height={imgSize} width={imgSize} alt=""></img>
          </IconButton>
          <Typography
            onClick={toHome}
            textAlign={"center"}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "regular" }}
          >
            The Pretentious Gentleman
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button onClick={toHome} color="inherit">
              Home
            </Button>
            <Button onClick={toAboutMe} color="inherit">
              About Me
            </Button>
            <Button onClick={toSupport} color="inherit">
              Support
            </Button>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              onClick={() => setSideOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={sideOpen} onClose={() => setSideOpen(false)}>
              <Box
                sx={{
                  backgroundColor: licorice,
                  height: "100%",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button onClick={toHome} sx={{ color: "white" }}>
                  Home
                </Button>
                <Button onClick={toAboutMe} sx={{ color: "white" }}>
                  About Me
                </Button>
                <Button onClick={toSupport} sx={{ color: "white" }}>
                  Support
                </Button>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
