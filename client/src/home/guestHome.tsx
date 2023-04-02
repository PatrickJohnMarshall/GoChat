import { SetStateAction, Dispatch } from "react";
import "./index.css";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

export default function GuestHomeContent(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  return (
    <div className="home-box">
      <div className="guest-box">
        <h1 className="guest-title">Welcome to GoChat!</h1>
        <p>To get started chatting, create an account.</p>
        <p>You can create a chat on your own with an account.</p>
        <p>Or create one with a friend through the friends list.</p>
      </div>
    </div>
  );
}
