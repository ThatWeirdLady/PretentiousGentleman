import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Portfolio from "./Portfolio";
import AboutMe from "./Components/AboutMe";
import { useState } from "react";

export const licorice = "#130303";
// const green = "#7b7554";
// const blackBean = "#341309";
// const spaceCadet = "#2d324d";
// const darkgrey = "#363446";
function App() {
  const [currentPage, setCurrentPage] = useState("portfolio");

  return (
    <div className="App" style={{ width: "100vw" }}>
      <NavBar onPageChange={setCurrentPage} />
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "aboutme" && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
