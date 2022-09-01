import React from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Person from "./components/Person";
import Status from "./components/Status";

function App() {
  const PersonList = [
    {
      first: "John",
      last: "Henry",
    },
    {
      first: "Eli",
      last: "Dork",
    },
  ];

  return (
    <div className="App">
      <Greet name="Sneha" isLoggedIn={true} />
      <Person names={PersonList} />
      <Status status="loading" />
      <Input
        value=""
        onchange={(event) => {
          console.log("change in input", event);
        }}
      />
      <Button
        handleclick={(event) => {
          console.log("button clicked", event);
        }}
      />
    </div>
  );
}

export default App;
