import { useState } from "react";

import NavBar from "./navbar";
import Home from "./home";
import LoginBox from "./loginbox";

function App() {
  const [appState, setAppState] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const AppProps = {
    appState: appState,
    setAppState: setAppState,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
  };

  function renderContent() {
    if (appState === "home") {
      return <Home />;
    }

    if (appState === "login") {
      return <LoginBox {...AppProps} />;
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
