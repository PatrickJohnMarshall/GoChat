import { useQuery, gql } from "@apollo/client";
import "./index.css";
import { CurrentUser } from "../helpers";
import { SetStateAction, Dispatch, useEffect, useState } from "react";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

function NavBarContent(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  function goToLogin() {
    setAppState("login");
  }

  function sendHome() {
    setAppState("home");
  }

  function isLoggedIn() {
    if (userID === "") {
      return false;
    } else {
      return true;
    }
  }

  return (
    <nav>
      <button
        id="nav-home"
        className="nav-section"
        onClick={() => {
          sendHome();
        }}
      >
        Home
      </button>
      <div id="nav-title" className="nav-section">
        <h1>GoChat</h1>
      </div>
      <button
        id="nav-login"
        className="nav-section"
        onClick={() => {
          isLoggedIn() ? setUserID("") : goToLogin();
        }}
      >
        {isLoggedIn() ? `Log Out` : `Login`}
      </button>
    </nav>
  );
}

export default NavBarContent;
