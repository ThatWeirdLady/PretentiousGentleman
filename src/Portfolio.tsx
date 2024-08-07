import "./App.css";
import BookCard from "./Components/BookCard";
import { ParallaxBackground } from "./Parallax/ParallaxBackground";
import Graveyard from "./images/graveyard2.jpg";
import Forest from "./images/Forest2.jpg";
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
import ArtworkCard from "./Components/ArtworkCard";
import FilmCarousel from "./Components/FilmCarousel";
import { licorice } from ".";
import { ParallaxText } from "./Components/ParallaxText";

export const Portfolio = () => {
  return (
    <>
      <ParallaxBackground url={Forest} height="20vh">
        <ParallaxText>Written Works</ParallaxText>
      </ParallaxBackground>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <BookCard
          img={ThreadCount}
          backgroundColor={licorice}
          title={"Thread Count"}
          content={"In Progress"}
          link={"./pdf/thread_count.pdf"}
        />
        <BookCard
          img={DictatorsGuide}
          backgroundColor={licorice}
          title={"The Dictator's Guide to Destroying Democracy"}
          content={"Available on Amazon"}
          link={"./pdf/the_dictators_guide_to_destroying_democracy.pdf"}
        />
        <BookCard
          img={WeHadBeenFighting}
          backgroundColor={licorice}
          title={"We Had Been Fighting"}
          content={"Completed Work"}
          link={"./pdf/we_had_been_fighting.pdf"}
        />
      </Box>

      <ParallaxBackground url={Forest} height="20vh">
        <ParallaxText>Artwork</ParallaxText>
      </ParallaxBackground>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          boxShadow: "white",
        }}
      >
        <ArtworkCard img={PrideImg} backgroundColor={licorice} title={""} />
        <ArtworkCard
          img={BardInFall}
          backgroundColor={licorice}
          title={"Bard In Fall"}
        />
        <ArtworkCard
          img={BeautifulDeath}
          backgroundColor={licorice}
          title={"Beautiful Death"}
        />
        <ArtworkCard
          img={NoLoitering}
          backgroundColor={licorice}
          title={"No Loitering"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <ArtworkCard
          img={AFoolKing}
          backgroundColor={licorice}
          title={"A Fool Kills A King"}
        />
        <ArtworkCard
          img={Skull}
          backgroundColor={licorice}
          title={"Death on a Shelf"}
        />
        <ArtworkCard
          img={BottomsUp}
          backgroundColor={licorice}
          title={"Bottoms Up"}
        />
        <ArtworkCard
          img={BardOnAWall}
          backgroundColor={licorice}
          title={"A Broken Song"}
        />
      </Box>
      <ParallaxBackground url={Graveyard} height="20vh">
        <ParallaxText>Film Work</ParallaxText>
      </ParallaxBackground>
      <FilmCarousel></FilmCarousel>
    </>
  );
};

export default Portfolio;
