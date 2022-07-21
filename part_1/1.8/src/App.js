import { useState } from "react";

const Header = () => <h1>give feedback</h1>;

const StatsLine = (props) => (
  <p>
    {props.name} {props.value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
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
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
