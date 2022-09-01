import { PersonProps } from "./../data types/Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      <p>You have messages from:</p>
      {props.names.map((name) => (
        <li key={name.first}>{name.first}</li>
      ))}
    </div>
  );
};

export default Person;
