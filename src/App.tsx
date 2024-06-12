import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";
import { ParallaxBackground } from "./Parallax/ParallaxBackground";
import Graveyard from "./images/graveyard2.jpg";
import Forest from "./images/Forest2.jpg";
import PaperBanner from "./Components/PaperBanner";
import ThreadCount from "./images/ThreadCount.webp";
import DictatorsGuide from "./images/DictatorsGuideEdit.jpg";
import Box from "@mui/material/Box";
import WeHadBeenFighting from "./images/WeHadBeenFighting.webp";
import PrideImg from "./images/Pride.jpg";
import BardInFall from "./images/BardInFall.jpg";
import BeautifulDeath from "./images/BeautifulDeath.jpg";
import NoLoitering from "./images/NoLoitering.jpg";
import AFoolKing from "./images/AFoolKillsAKing.jpg";
import Skull from "./images/skull.jpg";
import BottomsUp from "./images/BottomsUp.jpg";
import BardOnAWall from "./images/BardOnAWall.jpg";

const licorice = "#130303";
const green = "#7b7554";
const blackBean = "#341309";
const spaceCadet = "#2d324d";
const darkgrey = "#363446";
function App() {
  // return <ParallaxDemo />;
  return (
    <div className="App" style={{ width: "100vw" }}>
      <NavBar></NavBar>

      <ParallaxBackground url={Forest} height="20vh" />
      <PaperBanner
        backgroundColor={licorice}
        content="Written Works"
      ></PaperBanner>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <ImageCard
          img={ThreadCount}
          backgroundColor={darkgrey}
          title={"Thread Count"}
          content={"In Progress"}
        />
        <ImageCard
          img={DictatorsGuide}
          backgroundColor={blackBean}
          title={"The Dictator's Guide to Destroying Democracy"}
          content={"Available on Amazon"}
        />
        <ImageCard
          img={WeHadBeenFighting}
          backgroundColor={spaceCadet}
          title={"We Had Been Fighting"}
          content={"Completed Work"}
        />
      </Box>

      <ParallaxBackground url={Forest} height="20vh" />

      <PaperBanner backgroundColor={licorice} content="Artwork"></PaperBanner>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <ImageCard
          img={PrideImg}
          backgroundColor={darkgrey}
          title={""}
          content={
            "We show Pride for those who fought to get us here, and for those who fight to keep us here"
          }
        />
        <ImageCard
          img={BardInFall}
          backgroundColor={blackBean}
          title={"Bard In Fall"}
          content={""}
        />
        <ImageCard
          img={BeautifulDeath}
          backgroundColor={spaceCadet}
          title={"Beautiful Death"}
          content={""}
        />
        <ImageCard
          img={NoLoitering}
          backgroundColor={darkgrey}
          title={"No Loitering"}
          content={""}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <ImageCard
          img={AFoolKing}
          backgroundColor={darkgrey}
          title={"A Fool Kills A King"}
          content={""}
        />
        <ImageCard
          img={Skull}
          backgroundColor={spaceCadet}
          title={"Death on a Shelf"}
          content={""}
        />
        <ImageCard
          img={BottomsUp}
          backgroundColor={blackBean}
          title={"Bottoms Up"}
          content={""}
        />
        <ImageCard
          img={BardOnAWall}
          backgroundColor={darkgrey}
          title={"A Broken Song"}
          content={""}
        />
      </Box>
      <ParallaxBackground url={Graveyard} height="20vh" />
      <PaperBanner backgroundColor={licorice} content="Film Work"></PaperBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
