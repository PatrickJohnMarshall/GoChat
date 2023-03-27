import LoginBoxContent from "./loginbox";
import { SetStateAction, Dispatch } from "react";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function LoginBox(props: AppProps) {
  const { appState, setAppState, isLoggedIn, setIsLoggedIn } = props;

  const AppProps = {
    appState: appState,
    setAppState: setAppState,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
  };

  return <LoginBoxContent {...AppProps} />;
}

export default LoginBox;
