import Header from './Header';
import Content from './Content';
import Total from './Total';
import { useState } from 'react';
import Display from './Display';
import Button from './Button';
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
  const [counterx, setTimer] = useState(0);
  console.log('rendering with counter value ', counterx);
  const increseByOne = () => {
    console.log('increasing, value before', counterx);
    setTimer(counterx + 1);
  };

  const setToZero = () => {
    console.log('resetting to zero, value before', counterx);
    setTimer(0);
  };
  const decrementByOne = () => {
    console.log('decreasing, value before', counterx);
    setTimer(counterx - 1);
  };
  return (
    <div>
      <Display counterToDisplay={counterx} />
      <Button onSmash={increseByOne} buttonText='plus' />
      <Button onSmash={setToZero} buttonText='reset' />
      <Button onSmash={decrementByOne} buttonText='minus' />
    </div>
  );
};

export default App;
