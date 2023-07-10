import React from 'react';
import Calculator from '../component/calculator';
import '../styles/calculatorPage.css';

const CalculatorPage = () => (
  <div className="calcs">
    <h1 className="calc-title">Let us do some Math!</h1>
    <Calculator />
  </div>
);

export default CalculatorPage;
