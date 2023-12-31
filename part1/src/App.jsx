import { useState } from 'react';
import Button from './Button';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const onSmashGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };
  const onSmashNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };
  const onSmashBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };
  const averagePositive = () => {};
  return (
    <>
      <div>
        <Button buttonText='Good' onSmash={onSmashGood} />
        <Button buttonText='Neutral' onSmash={onSmashNeutral} />
        <Button buttonText='Bad' onSmash={onSmashBad} />
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {total}</p>
        <p>Average {total / 3}</p>
        <p>Positive %</p>
      </div>
    </>
  );
};

export default App;
