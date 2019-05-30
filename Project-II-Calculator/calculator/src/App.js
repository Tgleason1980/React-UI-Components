import React, {Component} from 'react';
import './App.css';
import {Button} from './components/ButtonComponents/Button';
import {Display} from './components/DisplayComponents/CalculatorDisplay';
import * as math from "mathjs";
import { ClearButton } from './components/ButtonComponents/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render(){
  return (
    <div className='app'>
      <div className='Button-wrapper'>
      <Display input={this.state.input} />
       <button className='clear'><ClearButton  handleClear={() => this.setState({ input: "" })}>CLEAR</ClearButton></button>
       <button className='division'><Button  handleClick={this.addToInput}>/</Button></button>
       </div>
       <div>
       <button className='sev'><Button  handleClick={this.addToInput}>7</Button></button>
       <button className='eight'><Button  handleClick={this.addToInput}>8</Button></button>
       <button className='nine'><Button  handleClick={this.addToInput}>9</Button></button>
       <button className='times'><Button  handleClick={this.addToInput}>X</Button></button>
       </div>
       <div>
       <button className='four'><Button  handleClick={this.addToInput}>4</Button></button>
       <button className='five'><Button  handleClick={this.addToInput}>5</Button></button>
       <button className='six'><Button  handleClick={this.addToInput}>6</Button></button>
       <button className='minus'><Button  handleClick={this.addToInput}>-</Button></button>
       </div>
       <div>
       <button className='one'><Button  handleClick={this.addToInput}>1</Button></button>
       <button className='two'><Button  handleClick={this.addToInput}>2</Button></button>
       <button className='three'><Button  handleClick={this.addToInput}>3</Button></button>
       <button className='plus'><Button  handleClick={this.addToInput}>+</Button></button>
      </div>
      <div>
       <button className='zero'><Button  handleClick={this.addToInput}>0</Button></button>
       <button className='equals'><Button  handleClick={this.addToInput}>=</Button></button>
       </div>
      </div>
    );
    }
  };

export default App;
