const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
};

const Total = ({ parts }) => {
  const total_exercises = parts.reduce(
    (result, part) => result + part.exercises,
    0
  );
  return (
    <p>
      <strong>total of {total_exercises} exercises</strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
