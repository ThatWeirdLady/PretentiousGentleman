import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Portfolio from "./Portfolio";
import AboutMe from "./Components/AboutMe";
import { useState } from "react";
import { Tab } from "./Tab";

export const licorice = "#130303";
function App() {
  const [currentPage, setCurrentPage] = useState(Tab.HOME);

  return (
    <div className="App" style={{ width: "100vw" }}>
      <NavBar onPageChange={setCurrentPage} />
      {currentPage === Tab.HOME && <Portfolio />}
      {currentPage === Tab.ABOUT && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
