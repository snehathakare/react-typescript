import { Name } from "./../data types/Person.types";

const Person = (props: Name) => {
  return (
    <div>
      <p>You have messages from:</p>
      {props.names.map((name) => (
        <li key={name.first}>
          {name.first} {name.last}
        </li>
      ))}
    </div>
  );
};

export default Person;
