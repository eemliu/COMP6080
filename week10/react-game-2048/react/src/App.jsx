import './App.css';
import React, { useState } from 'react';


function App() {
  const defaultBoard = [[2, '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '2', '', '']];

  console.log(defaultBoard);
  // 17:18
  const [board, setBoard] = useState(defaultBoard);

  const up = () => {
    const newBoard = [...newBoard];
    for (const column of newBoard) {
      for (let x = 0; x < 4; x++) {
        if (column[x] = '') {

        }
      }
    }
  }

  const handleKeyPress = (event) => {
    switch(event.key) {
      case 'ArrowUp':
        up();
        break;
    case 'ArrowDown':
      down();
      break;
  }

  return (
    <div className='App' onKeyDown={handleKeyPress} tabIndex='0'>
      <div className='parent'>
        <div id='box'>
          {board.map(column => (
            <div className='column'>
              {column.map(cell => (
                <div className={`cell cell${cell}`}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}};

export default App;