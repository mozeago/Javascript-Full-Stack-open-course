import Header from './Header';
import Content from './Content';
import Total from './Total';
const App = () => {
  // eslint-disable-next-line no-unused-vars

  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React: ',
    exercises: 10,
  };
  const part2 = {
    name: 'Using Props to pass data: ',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a Component: ',
    exercises: 14,
  };
  return (
    <div>
      <Header name={course} />
      <Content title={part1.name} exercises={part1.exercises} />
      <Content title={part2.name} exercises={part2.exercises} />
      <Content title={part3.name} exercises={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
