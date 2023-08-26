import { useState } from "react";
import Card from "../Card/Card";
import "./grid.css";
import checkWinner from "../../helpers/checkWinner";

const Grid = ({ numberOfCards }) => {
  const [board, setBoard] = useState(Array(numberOfCards).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const play = (index) => {
    if (currentPlayer === "X") {
      board[index] = "X";
      setCurrentPlayer("O");
    } else if (currentPlayer === "O") {
      board[index] = "O";
      setCurrentPlayer("X");
    }
    const win = checkWinner(board, currentPlayer === "X" ? "X" : "O");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
  };

  const reset = () => {
    setBoard([...Array(numberOfCards).fill(null)]);
    setWinner(null);
    setCurrentPlayer("X");
  };

  return (
    <div className="grid-wrapper">
      {winner && (
        <div>
          <h1 className="turns-highlight">Winner is: {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      )}
      <div className="turns-highlight">Turn: {currentPlayer}</div>
      <div className="grid">
        {board.map((ele, idx) => (
          <Card
            key={idx}
            onPlay={play}
            player={ele}
            index={idx}
            gameEnd={winner === null ? false : true}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
