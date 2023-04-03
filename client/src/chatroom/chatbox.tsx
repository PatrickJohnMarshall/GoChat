import { CurrentUser } from "../helpers";
import { SetStateAction, Dispatch, createRef, FormEvent } from "react";
import { useMutation, gql, useQuery, useSubscription } from "@apollo/client";

import "./index.css";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

const ADD_MESSAGE = gql`
  mutation createMessage($input: NewMessage!) {
    createMessage(input: $input) {
      id
      text
      userID
    }
  }
`;

const GET_MESSAGES_SUB = gql`
  subscription {
    getMessage {
      id
      text
      userID
    }
  }
`;

export default function ChatContent(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  const textRef = createRef<HTMLInputElement>();

  const [addMessage, { data: inputMessage, error, loading }] = useMutation(
    ADD_MESSAGE,
    {
      onError: (error) => {
        console.log("Error creating message", error);
      },
      // onCompleted: (inputMessage) => {
      //   console.log(inputMessage.createMessage.text);
      // },
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = textRef.current?.value;
    if (text) {
      addMessage({ variables: { input: { text, userID } } });
      textRef.current.value = "";
    }
  };

  const { data: subData } = useSubscription(GET_MESSAGES_SUB, {
    onError: (error) => {
      console.log(error);
    },
    onComplete: () => {
      console.log(subData);
    },
  });

  return (
    <div className="chat-box">
      <div className="message-box">
        {subData?.getMessage?.map((message: any) => (
          <p className="messages" key={message.id}>
            {message.text}
          </p>
        ))}
      </div>
      <div className="submit-box">
        <form onSubmit={handleSubmit}>
          <label className="user-name">{CurrentUser(userID)}</label>
          <input className="user-input" type="text" ref={textRef} />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    </div>
  );
}
