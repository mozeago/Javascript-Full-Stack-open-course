import { useState } from 'react';
import Button from './Button';
import History from './History';
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
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    console.log('right before ', right);
    const updatedRight = right + 1;
    setRight(updatedRight);
    console.log('right after ', right);
    setTotalClicks(updatedRight + left);
  };
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotalClicks(updatedLeft + right);
  };
  const setToZero = () => {
    setTotalClicks(0);
    setLeft(0);
    setRight(0);
    setAllClicks([]);
  };
  return (
    <>
      <div>
        {left}
        <Button onSmash={handleLeftClick} buttonText='Left' />
        <Button onSmash={setToZero} buttonText='Reset' />
        <Button onSmash={handleRightClick} buttonText='Right' />
        {right}
      </div>
      <History allCliks={allClicks} />
    </>
  );
};

export default App;
