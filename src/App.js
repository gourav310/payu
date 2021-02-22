import React, { useState } from "react";
import "./style.css";
import { GlobalStyle } from "./globalStyle";
import Start from "./getStarted.js";
import AllComments from "./AllComments";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
const data = require("./data0.json");
export default function App() {
  //button for dark mode
  // const history = useHistory();
  const [userName, setUser] = useState(null);
  const [link, setLink] = useState(null);
  const recieveData = (link, name) => {
    console.log(link, name);
    setUser(name);
    setLink(link);
  };
  console.log(data);
  const [mode, setMode] = useState("light");
  const [isDarkMode, setButton] = useState(false);
  const setIsDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButton(true);
    } else [setMode("light"), setButton(false)];
  };
  return (
    <ThemeProvider theme={{ mode: mode }}>
      <GlobalStyle />
      <div className="navbar">
        <span className="heading">
          <h1>PayU</h1>
          <p>Comment Section</p>
        </span>
        <div className="button">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={40}
          />
          <div>Switch Modes</div>
        </div>
      </div>
      {userName === null ? (
        <Start sendData={recieveData} />
      ) : (
        <AllComments userName={userName} link={link} />
      )}
      {/*// <AllComments
      //   userName={"Gourav Khurana"}
      //   link={"https://i.ibb.co/gmdQnxT/batman-512px.png"}
      // /> */}
    </ThemeProvider>
  );
}
