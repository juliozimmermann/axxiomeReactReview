import React, { useState, useCallback } from 'react'

export default function CounterState() {
  const [counter, setCounter] = useState(0);
  const [preventNegativeCounter, setPreventNegativeCounter] = useState(false);

  console.log(`render ${preventNegativeCounter}`);

  const handlePreventNegativeCounter = useCallback(() => setPreventNegativeCounter(currentState => !currentState), []);

  const handleIncreaseClick = useCallback(() => {
    setCounter(currentState => currentState + 1);
  }, [preventNegativeCounter]);

  const handleDecreaseClick = useCallback(() => {
    setCounter(currentState => {
      if (preventNegativeCounter && currentState <= 0) return currentState;
      return currentState - 1;
    });
  }, [preventNegativeCounter]);

  return <>
    <h1>Counter State</h1>
    <input type="checkbox" selected={preventNegativeCounter} onChange={handlePreventNegativeCounter} />
    <label>Prevent negative counter</label>
    <br />
    {counter}
    <button type="button" onClick={handleIncreaseClick}>Increase</button>
    <button type="button" onClick={handleDecreaseClick}>Decrease</button>
  </>;
}