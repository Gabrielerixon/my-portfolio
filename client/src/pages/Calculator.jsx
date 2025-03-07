import React, { useState } from 'react';
import './Calculator.css';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [calculated, setCalculated] = useState(false);

  const handleNumberClick = (num) => {
    if (display === '0' || calculated) {
      setDisplay(num);
      setCalculated(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorClick = (operator) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
    setCalculated(false);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setCalculated(false);
  };

  const handleCalculate = () => {
    try {
      const fullEquation = equation + display;
      const result = eval(fullEquation.replace(/×/g, '*').replace(/÷/g, '/'));
      setDisplay(String(result));
      setEquation(fullEquation + ' = ');
      setCalculated(true);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleDecimal = () => {
    if (calculated) {
      setDisplay('0.');
      setCalculated(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="day4-page">
      {/* Semi-transparent gradient overlay */}
      <div className="day4-overlay"></div>
      
      {/* Back button */}
      <Link to="/dailyui" className="floating-button">
        Return to Challengeboard
      </Link>
      
      <div className="day4-calculator-wrapper">
        <div className="day4-calculator">
          <div className="day4-calculator-display">
            <div className="day4-equation">{equation}</div>
            <div className="day4-screen">{display}</div>
          </div>
          <div className="day4-calculator-buttons">
            <button className="day4-btn day4-btn-clear" onClick={handleClear}>AC</button>
            <button className="day4-btn day4-btn-operator" onClick={() => handleOperatorClick('÷')}>÷</button>
            <button className="day4-btn day4-btn-operator" onClick={() => handleOperatorClick('×')}>×</button>
            <button className="day4-btn day4-btn-delete">⌫</button>
            
            <button className="day4-btn" onClick={() => handleNumberClick('7')}>7</button>
            <button className="day4-btn" onClick={() => handleNumberClick('8')}>8</button>
            <button className="day4-btn" onClick={() => handleNumberClick('9')}>9</button>
            <button className="day4-btn day4-btn-operator" onClick={() => handleOperatorClick('-')}>−</button>
            
            <button className="day4-btn" onClick={() => handleNumberClick('4')}>4</button>
            <button className="day4-btn" onClick={() => handleNumberClick('5')}>5</button>
            <button className="day4-btn" onClick={() => handleNumberClick('6')}>6</button>
            <button className="day4-btn day4-btn-operator" onClick={() => handleOperatorClick('+')}>+</button>
            
            <button className="day4-btn" onClick={() => handleNumberClick('1')}>1</button>
            <button className="day4-btn" onClick={() => handleNumberClick('2')}>2</button>
            <button className="day4-btn" onClick={() => handleNumberClick('3')}>3</button>
            <button className="day4-btn day4-btn-equals" onClick={handleCalculate}>=</button>
            
            <button className="day4-btn day4-btn-zero" onClick={() => handleNumberClick('0')}>0</button>
            <button className="day4-btn" onClick={handleDecimal}>.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;