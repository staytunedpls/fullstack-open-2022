import { useState } from "react";

const Anecdote = (props) => {
  return (
    <>
      <p>{props.text}</p>
      <p>has {props.vote_number} votes</p>
      <button onClick={props.voteClick}>vote</button>
      <button onClick={props.nextClick}>next anecdote</button>
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
    console.log("Next anecdote", random_number, ":", anecdotes[random_number]);
    return random_number;
  };

  const handleVote = (anecdote_idx) => {
    console.log("Current anecdote:", anecdote_idx);
    const copy = [...votes]
    copy[anecdote_idx] += 1
    setVotes(copy)
    console.log("Votes:", copy)
    return copy[anecdote_idx];
  }

  const zero_array = new Uint8Array(anecdotes.length);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(zero_array)

  return (
    <div>
      <Anecdote
        nextClick={() => setSelected(getRandomInt(anecdotes.length))}
        voteClick={() => handleVote(selected)}
        vote_number={votes[selected]}
        text={anecdotes[selected]}
      />
    </div>
  );
};

export default App;
