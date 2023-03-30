import { CurrentUser } from "../helpers";
import { SetStateAction, Dispatch, createRef, FormEvent } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

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

const GET_MESSAGES = gql`
  query getMessages {
    getMessages {
      id
      text
      userID
    }
  }
`;

export default function HomeContent(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  const textRef = createRef<HTMLInputElement>();

  const [addMessage, { data: inputMessage, error, loading }] = useMutation(
    ADD_MESSAGE,
    {
      onError: (error) => {
        console.log("Error creating message", error);
      },
      onCompleted: (inputMessage) => {
        console.log(inputMessage.createMessage.text);
      },
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

  const { data: allMessages } = useQuery(GET_MESSAGES);

  const messageArr = allMessages?.getMessages;

  function printMessages() {
    let messageBlock = [];

    for (let i = 0; i < messageArr?.length; i++) {
      messageBlock.push(<p>{messageArr[i].text}</p>);
    }

    return messageBlock;
  }

  return (
    <div>
      <p>Hello {CurrentUser(userID)}</p>
      <button>Open Chat</button>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={textRef} />
        <input type="submit" style={{ display: "none" }} />
      </form>
      {printMessages()}
    </div>
  );
}
