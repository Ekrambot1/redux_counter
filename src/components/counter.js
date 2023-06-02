import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1 className='head'>counter using redux</h1>
      <button onClick={increment} className='button'>Increment</button><br/><br/>
      <h2 className='display'>Counter: {counter}</h2><br/><br/>
      <button onClick={decrement} className='button'>Decrement</button>
    </div>
  );
};

export default Counter;
