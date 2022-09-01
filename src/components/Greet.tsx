import React from "react";

type GreetProps = {
  name: String;
  message?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const { message = 0 } = props;
  return (
    <div>
      <h1>Hallo {props.name} Guten Morgen!</h1>
      {props.isLoggedIn ? (
        <p>You are {props.message} logged in</p>
      ) : (
        <p>Please login with your username</p>
      )}
      <h3>You have {message} unread items</h3>
    </div>
  );
};

export default Greet;
