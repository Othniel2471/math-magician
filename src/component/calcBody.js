import React from 'react';

const CalcBody = () => (
  <>
    <div className="display">
      <span className="display-result">0</span>
    </div>
    <div className="keypad">
      <div className="top-row">
        <button type="button" className="keypad-key keypad-key--operator">AC</button>
        <button type="button" className="keypad-key keypad-key--operator">+/-</button>
        <button type="button" className="keypad-key keypad-key--operator">%</button>
        <button type="button" className="keypad-key keypad-key--operator last">/</button>
      </div>
      <div className="num-pad">
        <button type="button" className="keypad-key">7</button>
        <button type="button" className="keypad-key">8</button>
        <button type="button" className="keypad-key">9</button>
        <button type="button" className="keypad-key keypad-key--operator last">x</button>
      </div>
      <div className="num-pad">
        <button type="button" className="keypad-key">4</button>
        <button type="button" className="keypad-key">5</button>
        <button type="button" className="keypad-key">6</button>
        <button type="button" className="keypad-key keypad-key--operator last">-</button>
      </div>
      <div className="num-pad">
        <button type="button" className="keypad-key">1</button>
        <button type="button" className="keypad-key">2</button>
        <button type="button" className="keypad-key">3</button>
        <button type="button" className="keypad-key keypad-key--operator last">+</button>
      </div>
      <div className="num-pad">
        <button type="button" className="keypad-key keypad-key--double">0</button>
        <button type="button" className="keypad-key">.</button>
        <button type="button" className="keypad-key keypad-key--operator">=</button>
      </div>
    </div>
  </>
);

export default CalcBody;
