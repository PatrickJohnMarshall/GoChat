import { useState } from "react";

import NavBar from "./navbar";
import Home from "./home";
import LoginBox from "./loginbox";
import Chatroom from "./chatroom";

function App() {
  const [appState, setAppState] = useState("home");
  const [userID, setUserID] = useState("");

  const AppProps = {
    appState: appState,
    setAppState: setAppState,
    userID: userID,
    setUserID: setUserID,
  };

  function renderContent() {
    if (appState === "home") {
      return <Home {...AppProps} />;
    }

    if (appState === "login") {
      return <LoginBox {...AppProps} />;
    }

    if (appState === "chatroom") {
      return <Chatroom {...AppProps} />;
    }
  }

  return (
    <div className="App">
      <NavBar {...AppProps} />
      <div className="feature-box">
        <div className="content-box">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
