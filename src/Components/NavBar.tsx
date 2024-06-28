import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import small_logo from "../images/small_logo.jpg";

const imgSize = 64;

interface IProps {
  onPageChange: (nextPage: string) => void;
}

const NavBar = (props: IProps) => {
  const onPageChange = props.onPageChange;

  function toHome() {
    onPageChange("portfolio");
  }

  function toAboutMe() {
    onPageChange("aboutme");
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
            sx={{ mr: 2 }}
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
          <Button onClick={toHome} color="inherit">
            Home
          </Button>
          <Button onClick={toAboutMe} color="inherit">
            About Me
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
