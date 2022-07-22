const Header = (props) => {
  return <h2>{props.course}</h2>;
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

export default Course;