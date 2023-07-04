import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalcBody = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState(calculate(state, value));
  };

  return (
    <>
      <div className="display">
        <span className="display-result">{ state.next || state.operation || state.total || 0 }</span>
      </div>
      <div className="keypad">
        <div className="top-row">
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator">AC</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator">+/-</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator">%</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator last">/</button>
        </div>
        <div className="num-pad">
          <button type="button" onClick={handleClick} className="keypad-key">7</button>
          <button type="button" onClick={handleClick} className="keypad-key">8</button>
          <button type="button" onClick={handleClick} className="keypad-key">9</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator last">x</button>
        </div>
        <div className="num-pad">
          <button type="button" onClick={handleClick} className="keypad-key">4</button>
          <button type="button" onClick={handleClick} className="keypad-key">5</button>
          <button type="button" onClick={handleClick} className="keypad-key">6</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator last">-</button>
        </div>
        <div className="num-pad">
          <button type="button" onClick={handleClick} className="keypad-key">1</button>
          <button type="button" onClick={handleClick} className="keypad-key">2</button>
          <button type="button" onClick={handleClick} className="keypad-key">3</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator last">+</button>
        </div>
        <div className="num-pad">
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--double">0</button>
          <button type="button" onClick={handleClick} className="keypad-key">.</button>
          <button type="button" onClick={handleClick} className="keypad-key keypad-key--operator last">=</button>
        </div>
      </div>
    </>
  );
};

export default CalcBody;
