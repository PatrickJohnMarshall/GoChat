import "./index.css";
import { SetStateAction, Dispatch } from "react";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function NavBarContent(props: AppProps) {
  const { appState, setAppState, isLoggedIn, setIsLoggedIn } = props;

  function goToLogin() {
    setAppState("login");
  }

  function sendHome() {
    setAppState("home");
  }

  function toggleLoginState() {
    setIsLoggedIn(false);
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
          if (isLoggedIn) {
            toggleLoginState();
          } else {
            goToLogin();
          }
        }}
      >
        {isLoggedIn ? `Log Out` : `Login`}
      </button>
    </nav>
  );
}

export default NavBarContent;
