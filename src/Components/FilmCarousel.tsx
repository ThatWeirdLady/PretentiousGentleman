import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoCard from "./VideoCard";

const licorice = "#130303";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FilmCarousel = () => {
  return (
    <Carousel responsive={responsive}>
      <VideoCard
        vid="https://www.youtube.com/embed/7vNZaPXIWdk?si=NhaFu97rMDt67oU8"
        title="1000 Dollar Bounty"
        backgroundColor={licorice}
      />
      <VideoCard
        vid="https://www.youtube.com/embed/E75PLi66DsI?si=8wlJXFLrVzYxXNuQ"
        title="Assassin"
        backgroundColor={licorice}
      />
      <VideoCard
        vid="https://www.youtube.com/embed/pk9KKdNLgd0?si=A6txSGm-0Chyruz1"
        title="100 Dollar Bounty"
        backgroundColor={licorice}
      />
      <VideoCard
        vid="https://www.youtube.com/embed/RdiSHScWWoE?si=wvOM7ij7nZaG13kl"
        title="100 Dollar Bounty Trailer"
        backgroundColor={licorice}
      />
      <VideoCard
        vid="https://www.youtube.com/embed/F0MxSHrtBWI?si=UF0H-kTS1MXKBKNV"
        title="Dramatic Reading of Fox in Socks"
        backgroundColor={licorice}
      />
      <VideoCard
        vid="https://www.youtube.com/embed/sg5hxvk2q-Y?si=qPUvo0e4nAukFO3p"
        title="Dramatic Reading of The Very Hungry Caterpillar"
        backgroundColor={licorice}
      />
    </Carousel>
  );
};

export default FilmCarousel;
