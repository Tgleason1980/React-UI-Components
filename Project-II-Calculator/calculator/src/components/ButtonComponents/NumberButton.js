import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
      <div>
      <div>
       <button className='clear'>CLEAR</button>
       <button className='division'>/</button>
       </div>
       <div>
       <button className='sev'>7</button>
       <button className='eight'>8</button>
       <button className='nine'>9</button>
       <button className='times'>X</button>
       </div>
       <div>
       <button className='four'>4</button>
       <button className='five'>5</button>
       <button className='six'>6</button>
       <button className='minus'>-</button>
       </div>
       <div>
       <button className='one'>1</button>
       <button className='two'>2</button>
       <button className='three'>3</button>
       <button className='plus'>+</button>
       </div>
       <div>
       <button className='zero'>0</button>
       <button className='equals'>=</button>
       </div>
      </div>
    );
  };

  export default NumberButton;