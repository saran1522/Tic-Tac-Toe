import { useState } from "react";
import Confetti from "react-confetti";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [sign, setSign] = useState("X");

  function decideWinner(squares) {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winner of winners) {
      const [a, b, c] = winner;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  let status;
  const winner = decideWinner(squares);
  if (winner) status = `${winner} has won the game 🎉🎉`;
  else if (!squares.includes("")) status = "It's a tie";
  else status = `${sign}'s turn`;

  function handleValue(ind) {
    if (winner || squares[ind]) return;
    const newSquares = squares.slice();
    newSquares[ind] = sign;
    setSquares(newSquares);
    setSign((prevSing) => (prevSing === "X" ? "0" : "X"));
  }

  return (
    <main>
      {winner && <Confetti />}
    <div className="container">
      <p className="winText">{status}</p>
      <div className="board">
        <div className="square-row">
          <Square val={squares[0]} handleValue={() => handleValue(0)} />
          <Square val={squares[1]} handleValue={() => handleValue(1)} />
          <Square val={squares[2]} handleValue={() => handleValue(2)} />
        </div>
        <div className="square-row">
          <Square val={squares[3]} handleValue={() => handleValue(3)} />
          <Square val={squares[4]} handleValue={() => handleValue(4)} />
          <Square val={squares[5]} handleValue={() => handleValue(5)} />
        </div>
        <div className="square-row">
          <Square val={squares[6]} handleValue={() => handleValue(6)} />
          <Square val={squares[7]} handleValue={() => handleValue(7)} />
          <Square val={squares[8]} handleValue={() => handleValue(8)} />
        </div>
      </div>
    </div>
    </main>
  );
}
