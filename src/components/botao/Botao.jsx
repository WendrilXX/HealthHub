import React, { useState } from 'react';
import './botao.css';

function Botao() {
  const [color, setColor] = useState('white');

  const handleClick = () => {
    setColor(prevColor => (prevColor === 'white' ? 'black' : 'white'));
  };

  return (
    <div>
      <button 
        className={`button-header ${color}`} 
        onClick={handleClick}
      >
        Tab 1
      </button>
    </div>
  );
}

export default Botao;


