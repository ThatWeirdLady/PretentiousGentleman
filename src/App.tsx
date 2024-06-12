import "./App.css";
import NavBar from "./Components/NavBar";
import prideImg from "./images/Pride.jpg";
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

function App() {
  // return <ParallaxDemo />;
  return (
    <div className="App" style={{ width: "100vw" }}>
      <NavBar></NavBar>

      <ParallaxBackground url={Forest} height="20vh" />
      <PaperBanner
        backgroundColor={"#7b7554"}
        content="Written Works"
      ></PaperBanner>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <ImageCard
          img={ThreadCount}
          backgroundColor="#363446"
          title={"Thread Count"}
          content={"In Progress"}
        ></ImageCard>
        <ImageCard
          img={DictatorsGuide}
          backgroundColor="#341309"
          title={"The Dictator's Guide to Destroying Democracy"}
          content={"Available on Amazon"}
        ></ImageCard>
        <ImageCard
          img={WeHadBeenFighting}
          backgroundColor="#2D324D"
          title={"We Had Been Fighting"}
          content={"Completed Work"}
        ></ImageCard>
      </Box>

      <ParallaxBackground url={Graveyard} height="45vh" />

      <PaperBanner backgroundColor="#7B7554" content="Artwork"></PaperBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
