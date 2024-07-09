import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Portfolio from "./Portfolio";
import AboutMe from "./Components/AboutMe";
import { useState } from "react";
import { Tab } from "./Tab";
import { SupportPage } from "./Support";

export const licorice = "#130303";
function App() {
  const [currentPage, setCurrentPage] = useState(Tab.HOME);

  return (
    <div className="App" style={{ flexGrow: 1 }}>
      <NavBar onPageChange={setCurrentPage} />
      {currentPage === Tab.HOME && <Portfolio />}
      {currentPage === Tab.ABOUT && <AboutMe />}
      {currentPage === Tab.SUPPORT && <SupportPage />}
      <Footer />
    </div>
  );
}

export default App;
