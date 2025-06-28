import React, { useState } from "react";
import "./Login.css";
import { IoIosInfinite } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { auth } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [newuser, setNewuser] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  function submit(e) {
    e.preventDefault();
    setError(false);
    if (newuser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userDetails) => {
          console.log(userDetails);
          localStorage.setItem("username", username);
        })
        .catch(() => {
          setError(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        // .then((userDetails) => {
        //   console.log(userDetails);
        // })
        .catch((error) => {
          setError(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  }

  return (
    <div className="login-page">
      <header>
        <span>
          from <i>Infinity Studios</i>
        </span>
      </header>

      <IoIosInfinite className="logo" />

      <h2 className="title">
        Sub_Min
        <br />
        Dashboard
      </h2>

      <form onSubmit={submit}>
        {newuser && (
          <div className="user-name">
            <input
              type="text"
              id="user-name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="user-name"> User Name</label>
          </div>
        )}
        <div className="email">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email"> Email</label>
        </div>
        <div className="password">
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password"> Password</label>
        </div>

        {error && (
          <>
            <IoIosWarning className="warning-icon" />
            <span className="error">Process Failed</span>
            <span className="error">{errorMsg}</span>
          </>
        )}

        <button type="submit">{newuser ? "Sign Up" : "Log In"}</button>

        {newuser ? (
          <span className="user-state">
            Already have an account?{" "}
            <b onClick={() => setNewuser(!newuser)}>Log In</b>
          </span>
        ) : (
          <span className="user-state">
            Don't have an account?{" "}
            <b onClick={() => setNewuser(!newuser)}>Sign Up</b>
          </span>
        )}
      </form>
    </div>
  );
}

export default Login;
