import React, { useContext } from "react";
import "./Main.css";
import { ThemeContext } from "../../ThemeContext";
import Header from "../Header/Header";
import Content from "../Content/Content";

function Main({ userName }) {
  const { DarkTheme } = useContext(ThemeContext);
  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header />
      <Content userName={userName} />
    </div>
  );
}

export default Main;
