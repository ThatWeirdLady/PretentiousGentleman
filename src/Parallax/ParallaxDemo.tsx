import { ParallaxBackground } from "./ParallaxBackground";
import Forest from "../images/darkforestBackground.jpeg";
import Graveyard from "../images/graveyard-background.jpeg";

export const ParallaxDemo = () => {
  return (
    <>
      <ParallaxBackground url={Forest} height={"30vh"} />
      <div style={{ backgroundColor: "red", fontSize: "36px" }}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
      <ParallaxBackground url={Graveyard} height={"30vh"} />
      <div style={{ backgroundColor: "red", fontSize: "36px" }}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </>
  );
};
