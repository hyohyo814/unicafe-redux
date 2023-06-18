import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const goodCt = useSelector((state) => state.good);
  const okCt = useSelector((state) => state.ok);
  const badCt = useSelector((state) => state.bad);

  const good = () => {
    dispatch({
      type: 'GOOD',
    });
  };

  const ok = () => {
    dispatch({
      type: 'OK',
    });
  };

  const bad = () => {
    dispatch({
      type: 'BAD',
    });
  };

  const zero = () => {
    dispatch({
      type: 'ZERO',
    });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {goodCt}</div>
      <div>ok {okCt}</div>
      <div>bad {badCt}</div>
    </div>
  );
};

export default App;
