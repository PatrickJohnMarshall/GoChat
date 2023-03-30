import ChatContent from "./chatbox";
import { SetStateAction, Dispatch } from "react";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

export default function Chatroom(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  const AppProps = {
    appState: appState,
    setAppState: setAppState,
    userID: userID,
    setUserID: setUserID,
  };

  return <ChatContent {...AppProps} />;
}
