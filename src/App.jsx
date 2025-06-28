import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import { ThemeContext } from "./ThemeContext";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("User Name");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setUserName(localStorage.getItem("username"));
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className="App">
        {loggedIn ? (
          <>
            <Navigation userName={userName} />
            <Main userName={userName} />
          </>
        ) : (
          <Login />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
