import React from "react";
import Heading from "./Heading";
import Oscar from "./Oscar";
type StatusProps = {
  status: "loading" | "error" | "fetching";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "fetching") {
    message = "fetching";
  } else if (props.status === "error") {
    message = "error";
  }
  return (
    <div>
      <h2>{message}</h2>
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>
    </div>
  );
};

export default Status;
