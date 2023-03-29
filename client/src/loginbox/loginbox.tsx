import { SetStateAction, Dispatch, useState, FormEvent } from "react";
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client/core";

import "./index.css";

interface AppProps {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>>;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
}

const ADD_USER = gql`
  mutation createUser($input: NewUser!) {
    createUser(input: $input) {
      id
      name
      password
    }
  }
`;

function LoginBoxContent(props: AppProps) {
  const { appState, setAppState, userID, setUserID } = props;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { data, error, loading }] = useMutation(ADD_USER, {
    onError: (error) => {
      console.log("Error creating user", error);
    },
    onCompleted: (data) => {
      setUserID(data.createUser.id);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({ variables: { input: { name, password } } });
    setName("");
    setPassword("");
    sendHome();
  };

  function sendHome() {
    setAppState("home");
  }

  return (
    <div className="login-box">
      <form className="form-box" onSubmit={handleSubmit}>
        <label className="form">Username:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input id="form-submit" type="submit" disabled={loading} />
      </form>
    </div>
  );
}

export default LoginBoxContent;
