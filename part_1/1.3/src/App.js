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
      <Part part_name={props.part1.name} num_exercises={props.part1.exercises} />
      <Part part_name={props.part2.name} num_exercises={props.part2.exercises} />
      <Part part_name={props.part3.name} num_exercises={props.part3.exercises} />
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total_exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
