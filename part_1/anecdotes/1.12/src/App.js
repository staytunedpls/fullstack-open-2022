import { useState } from "react";

const Anecdote = (props) => {
  return (
    <>
      <p>{props.text}</p>
      <button onClick={props.handleClick}>next anecdote</button>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const getRandomInt = (max) => {
    let random_number = Math.floor(Math.random() * max);
    console.log(random_number, anecdotes[random_number]);
    return random_number;
  };

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <Anecdote
        handleClick={() => setSelected(getRandomInt(anecdotes.length))}
        text={anecdotes[selected]}
      />
    </div>
  );
};

export default App;
