const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>{props.part_name} {props.num_exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part_name={props.part1} num_exercises={props.exercises1} />
      <Part part_name={props.part2} num_exercises={props.exercises2} />
      <Part part_name={props.part3} num_exercises={props.exercises3} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total_exercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total total_exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
