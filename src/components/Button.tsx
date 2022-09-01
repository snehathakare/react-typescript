import React from "react";

type ButtonProps = {
  handleclick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleclick(event, 1)}>Submit</button>
    </div>
  );
};

export default Button;
