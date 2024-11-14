import "./App.css";
import React, { useState } from "react";

const App = () => {
  const defaultBoard = [
    [2, "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", 2, "", ""],
  ];

  // Add a new number block every time the board moves
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * 16)
  }

  const addNewBlock = () => {
    const newBoard = [...board];
    while (true) {
      // Get random cell
      const cellNumber = getRandomInt(15);
      const colNumber = Math.floor((cellNumber + 1) / 4);
      const rowNumber = cellNumber % 4;
      if (board[colNumber][rowNumber] === '') {
        newBoard[colNumber][rowNumber] = 2;
        break;
      }
    }
    setBoard(newBoard);
  }

  // 17:18
  const [board, setBoard] = useState(defaultBoard);

  console.log(board);
  const up = () => {
    const newBoard = [...board];
    for (const column of newBoard) {
      for (let x = 0; x < 4; x++) {
        // Condense code blocks together
        for (let y = x + 1; y < 4; y++) {
          if (column[x] === "") {
            if (column[y] !== "") {
              column[x] = column[y];
              column[y] = "";
              break;
            }
          } else {
            if (column[y] === column[x]) {
              column[x] = column[y] + column[x];
              column[y] = "";
              break;
            }
          }
        }
      }
    }
    // Og block of code
    // if (column[x] === "") {
    //   for (let y = x + 1; y < 4; y++) {
    //     if (column[y] !== "") {
    //       column[x] = column[y];
    //       column[y] = "";
    //       break;
    //     }
    //   }
    // } else {
    //   for (let y = x + 1; y < 4; y++) {
    //     if (column[y] === column[x]) {
    //       column[x] = column[y] * 2;
    //       column[y] = "";
    //       break;
    //     }
    //   }
    // }
    console.log(newBoard);
    setBoard(newBoard);
  };

  const down = () => {
    const newBoard = [...board];
    for (const column of newBoard) {
      for (let x = 3; x >= 0; x--) {
        for (let y = x - 1; y >= 0; y--) {
          if (column[x] === "") {
            if (column[y] !== "") {
              column[x] = column[y];
              column[y] = "";
              break;
            }
          } else {
            if (column[y] === column[x]) {
              column[x] = column[y] + column[x];
              column[y] = "";
              break;
            }
          }
        }
      }
    }
    console.log(newBoard);
    setBoard(newBoard);
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "ArrowUp":
        up();
        break;
      case "ArrowDown":
        down();
        break;
    }
    addNewBlock();
  };

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <div id="background">
        <div className="board" id="box">
          {board.map((column) => (
            <div className="board-col">
              {column.map((cell) => (
                <div
                  className={cell !== "" ? `tile style-${cell}` : "tile empty"}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
