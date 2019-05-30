import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='app'>
    <Display></Display>
     <NumberButton></NumberButton>
    </div>
  );
};

export default App;
