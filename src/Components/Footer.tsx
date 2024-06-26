import React from "react";
import { grey } from "../index";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import patreon from "../images/icons8-patreon-50.png";

const Footer = () => {
  const openLink = (link: string) => {
    if (!link) return;
    console.log(link);
    window.open(link, "_newtab");
  };
  return (
    <Box sx={{ backgroundColor: grey, height: "600", width: "100%" }}>
      <BottomNavigation sx={{ width: "100%", backgroundColor: "#00000000" }}>
        <BottomNavigationAction
          role="button"
          icon={<YouTubeIcon />}
          onClick={() =>
            openLink("https://www.youtube.com/@thepretentiousgentleman")
          }
        />
        <BottomNavigationAction
          role="button"
          icon={<FacebookIcon />}
          onClick={() =>
            openLink("https://www.facebook.com/PretentiousGentleman")
          }
        />
        <BottomNavigationAction
          role="button"
          icon={<img src={patreon} alt="" />}
          onClick={() =>
            openLink("https://www.patreon.com/ThePretentiousGentleman")
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
