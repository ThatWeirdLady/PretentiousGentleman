import Box from "@mui/material/Box";
import { ParallaxBackground } from "../Parallax/ParallaxBackground";
import Aurora from "../images/Aurora.jpeg";
import ProfilePic from "../images/PretentiousGentlemanProfilePic.jpg";
import { Typography } from "@mui/material";
import { ParallaxText } from "./ParallaxText";

const AboutMe = () => {
  return (
    <>
      <ParallaxBackground url={Aurora} height="52vh">
        <Box
          sx={{
            width: "100%",
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ParallaxText>About Me</ParallaxText>
          <img
            className="
        rounded-image"
            src={ProfilePic}
            alt="Profile Pic of The Pretentious Gentleman"
            height={450}
          ></img>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <img
            className="
        rounded-image"
            src={ProfilePic}
            alt="Profile Pic of The Pretentious Gentleman"
            width="75%"
          ></img>
        </Box>
      </ParallaxBackground>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "whitesmoke",
          py: 3,
        }}
      >
        <Box
          sx={{
            height: "500px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{ fontFamily: "serif", fontWeight: "100", fontSize: "30px" }}
          >
            Hey! Thanks for stopping by!
          </Typography>
          <Typography
            sx={{ fontFamily: "serif", fontWeight: "100", fontSize: "20px" }}
          >
            I'm the Pretentious Gentleman. I started this in 2019 to try to
            begin a discourse on some common social issues that are important to
            me. I share some unpopular opinions on current issues,
            unapologetically. I have also begun branching out into video
            creation, written works and digital art. If you find something that
            interests you feel free to check out my socials!
          </Typography>
        </Box>
        <Box
          sx={{
            height: "500px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "serif",
              fontWeight: "lighter",
              fontSize: "20px",
            }}
          >
            A Foul Mouthed,
          </Typography>
          <Typography
            sx={{ fontFamily: "serif", fontWeight: "bold", fontSize: "30px" }}
          >
            Bleeding Heart,
          </Typography>
          <Typography
            sx={{ fontFamily: "serif", fontWeight: "bold", fontSize: "20px" }}
          >
            Self Righteous,
          </Typography>
          <Typography
            sx={{ fontFamily: "serif", fontWeight: "40", fontSize: "40px" }}
          >
            Left Leaning,
          </Typography>
          <Typography
            sx={{ fontFamily: "serif", fontWeight: "100", fontSize: "45px" }}
          >
            Canadian Social Commentator
          </Typography>
        </Box>
      </Box>
      <ParallaxBackground url={Aurora} height="25vh" />
    </>
  );
};

export default AboutMe;
