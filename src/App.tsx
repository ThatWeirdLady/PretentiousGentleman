import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import WelcomeCard from './WelcomeCard';
import CardBox from './CardBox';
import { paleGreen, palePink, red } from '.';
import { Box, Typography } from '@mui/material';
import prideImg from "./images/Pride.jpg";
import CardBoxContent from './CardBoxContent';
import ThreadCount from "./images/ThreadCount.webp";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <WelcomeCard />
      <CardBox backgroundColor={paleGreen}  >
        <CardBoxContent img={prideImg} title={"Worth Fighting For"} content={"In honor of Pride Month"} flip={false} />
      </CardBox>
      <CardBox backgroundColor={red}  >
        <CardBoxContent img={ThreadCount} title={"Thread Count"} content={"RICK WRITE ME SOMETHING FOR THIS"} flip={true} />
      </CardBox>
      <Footer></Footer>
    </div>
  );
}

export default App;



