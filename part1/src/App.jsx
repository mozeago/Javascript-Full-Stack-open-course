import Header from './Header';
import Content from './Content';
import Total from './Total';
const App = () => {
  // eslint-disable-next-line no-unused-vars

  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React: ';
  const exercises1 = 10;
  const part2 = 'Using Props to pass data: ';
  const exercises2 = 7;
  const part3 = 'State of a Component: ';
  const exercises3 = 14;
  return (
    <div>
      <Header name={course} />
      <Content title={part1} exercises={exercises1} />
      <Content title={part2} exercises={exercises2} />
      <Content title={part3} exercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
