import { SetStateAction, Dispatch } from "react";
import "./index.css";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

export default function UserHomeContent(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  function createChat() {
    setAppState("chatroom");
  }

  return (
    <div className="home-box">
      <div className="list-box">Friends</div>
      <div className="list-box">
        <button
          className="home-button"
          onClick={() => {
            createChat();
          }}
        >
          Create Chat
        </button>
      </div>
    </div>
  );
}
