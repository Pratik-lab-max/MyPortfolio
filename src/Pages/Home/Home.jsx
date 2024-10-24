import React, { useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import Banner from "./Banner";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import MyWork from "./MyWork";
import Contact from "./Contact";

const Home = () => {
  const [lightMode, setLightMode] = useState(false);

  const handleToggleThemeMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={`${lightMode ? "" : "bg-dark"}`}>
      <Navbar
        lightMode={lightMode}
        handleToggleThemeMode={handleToggleThemeMode}
      />
      <Banner lightMode={lightMode} />
      <About lightMode={lightMode} />
      <Education />
      <Skills lightMode={lightMode} />
      <MyWork lightMode={lightMode} />
      <Contact lightMode={lightMode} />
    </div>
  );
};

export default Home;
