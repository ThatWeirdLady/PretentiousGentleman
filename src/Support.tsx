import Aurora from "./images/Aurora.jpeg";
import { ParallaxText } from "./Components/ParallaxText";
import { ParallaxBackground } from "./Parallax/ParallaxBackground";
import { Box, Typography } from "@mui/material";
import fiverr from "./images/fiverr.png";
import amazon from "./images/amazon.webp";
import donkey from "./images/donkey.webp";
import lime from "./images/lime.webp";

const linkTo = (url: string) => () => window.open(url, "_newtab");

export const SupportPage = () => {
  return (
    <>
      <ParallaxBackground url={Aurora} height="25vh">
        <ParallaxText>Support Me!</ParallaxText>
      </ParallaxBackground>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          m: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Voiceover work on Fiverr
          </Typography>
          <img
            onClick={linkTo(
              "https://www.fiverr.com/thepretentiousg/provide-a-clear-and-articulate-voice-over-for-whatever-your-project-requires"
            )}
            src={fiverr}
            width={"33%"}
            alt="fiverr logo"
            style={{ cursor: "pointer" }}
          ></img>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            onClick={linkTo(
              "https://www.amazon.ca/stores/The-Pretentious-Gentleman/author/B08KLDYV3N"
            )}
            src={amazon}
            width={"33%"}
            alt="amazon logo"
            style={{ cursor: "pointer", margin: "20px" }}
          ></img>

          <Typography variant="h4" sx={{ color: "white" }}>
            Buy my books on Amazon!
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" sx={{ color: "white" }}>
        Or my merch on TeeSpring!
      </Typography>
      <Box>
        <img
          onClick={linkTo(
            "https://the-pretentious-gentleman-2.creator-spring.com/listing/donkey-dominatrix"
          )}
          src={donkey}
          width={"33%"}
          alt="donkey logo"
          style={{ cursor: "pointer", margin: "20px", borderRadius: "10px" }}
        ></img>

        <img
          onClick={linkTo(
            "https://the-pretentious-gentleman-2.creator-spring.com/listing/submissive-citrus"
          )}
          src={lime}
          width={"33%"}
          alt="lime logo"
          style={{ cursor: "pointer", margin: "20px", borderRadius: "10px" }}
        ></img>
      </Box>
    </>
  );
};
