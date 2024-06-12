import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import WelcomeCard from "./WelcomeCard";
import CardBox from "./Components/CardBox";
import { paleGreen, palePink, red } from ".";
import { Box, Typography } from "@mui/material";
import prideImg from "./images/Pride.jpg";
import CardBoxContent from "./Components/CardBoxContent";
import ThreadCount from "./images/ThreadCount.webp";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";
import { ParallaxDemo } from "./Parallax/ParallaxDemo";
import { ParallaxBackground } from "./Parallax/ParallaxBackground";
import BardInFall from "./images/BardInFall.jpg";
import Graveyard from "./images/graveyard2.jpg";
import Forest from "./images/Forest2.jpg";
import PaperBanner from "./Components/PaperBanner";

function App() {
  // return <ParallaxDemo />;
  return (
    <div className="App" style={{ width: "100vw" }}>
      <NavBar></NavBar>

      <ParallaxBackground url={Forest} height="15vh" />
      <PaperBanner></PaperBanner>
      <ImageCard
        img={prideImg}
        title={"Worth Fighting For"}
        content={
          "'We show Pride for those who fought to get us here, and for those who fight to keep us here.'"
        }
      ></ImageCard>

      <CardBox backgroundColor={paleGreen}>
        <CardBoxContent
          img={prideImg}
          title={"Worth Fighting For"}
          content={"In honor of Pride Month"}
          flip={false}
        />
      </CardBox>
      <CardBox backgroundColor={red}>
        <CardBoxContent
          img={ThreadCount}
          title={"Thread Count"}
          content={"RICK WRITE ME SOMETHING FOR THIS"}
          flip={true}
        />
      </CardBox>
      <ParallaxBackground url={Graveyard} height="45vh" />
      <Footer></Footer>
    </div>
  );
}

export default App;
