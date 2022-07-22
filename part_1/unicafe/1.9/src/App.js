import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const StatsLine = (props) => (
  <p>
    {props.name} {props.value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <>
        <Header text="statistics" />
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <Header text="statistics" />
      <StatsLine name="good" value={good} />
      <StatsLine name="neutral" value={neutral} />
      <StatsLine name="bad" value={bad} />
      <StatsLine name="all" value={good + neutral + bad} />
      <StatsLine name="average" value={(good - bad) / (good + neutral + bad)} />
      <StatsLine
        name="positive"
        value={(good / (good + neutral + bad)) * 100 + "%"}
      />
    </>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
