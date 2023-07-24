import { useState } from 'react'

function Square({ value, squareClick }) {

  return <button className='square' onClick={squareClick}>{value}</button>
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClickSquare(index) {
    const nextSquares = squares.slice();

    nextSquares[index] = 'X';
    setSquares(nextSquares);
  }
  return (
    <>
      <div className='container'>
        <h1>TicTacToe</h1>
        <div className='square-wrapper'>
          <Square value={squares[0]} squareClick={() => handleClickSquare(0)} />
          <Square value={squares[1]} squareClick={() => handleClickSquare(1)} />
          <Square value={squares[2]} squareClick={() => handleClickSquare(2)} />
          <Square value={squares[3]} squareClick={() => handleClickSquare(3)} />
          <Square value={squares[4]} squareClick={() => handleClickSquare(4)} />
          <Square value={squares[5]} squareClick={() => handleClickSquare(5)} />
          <Square value={squares[6]} squareClick={() => handleClickSquare(6)} />
          <Square value={squares[7]} squareClick={() => handleClickSquare(7)} />
          <Square value={squares[8]} squareClick={() => handleClickSquare(8)} />
        </div>

      </div>
    </>
  )
}

export default App
