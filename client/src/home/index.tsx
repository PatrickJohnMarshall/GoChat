import GuestHomeContent from "./guestHome";
import UserHomeContent from "./userHome";
import { SetStateAction, Dispatch } from "react";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

export default function Home(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  const AppProps = {
    appState: appState,
    setAppState: setAppState,
    userID: userID,
    setUserID: setUserID,
  };

  switch (userID) {
    case "":
      return <GuestHomeContent {...AppProps} />;
    default:
      return <UserHomeContent {...AppProps} />;
  }
}
