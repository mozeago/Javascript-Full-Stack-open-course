import Header from './Header';
import Content from './Content';
import Total from './Total';
const App = () => {
  // eslint-disable-next-line no-unused-vars

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React: ',
        exercises: 10,
      },
      {
        name: 'Using Props to pass data: ',
        exercises: 7,
      },
      {
        name: 'State of a Component: ',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header name={course.name} />
      <Content name={course.parts} />
      <Total />
    </div>
  );
};

export default App;
