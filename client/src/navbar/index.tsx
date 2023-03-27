import NavBarContent from "./navbar";
import { SetStateAction, Dispatch } from "react";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function NavBar(props: AppProps) {
  const { appState, setAppState, isLoggedIn, setIsLoggedIn } = props;

  const AppProps = {
    appState: appState,
    setAppState: setAppState,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
  };

  return <NavBarContent {...AppProps} />;
}

export default NavBar;
