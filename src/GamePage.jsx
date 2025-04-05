import { useState } from 'react';

function GamePage({ word }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  const display = word
    .split('')
    .map((ch) => (guessedLetters.includes(ch) ? ch : '_'))
    .join(' ');

  return (
    <div>
      <h2>Guess the World!</h2>

      <p>{display}</p>

      <input 
        type="text"
        maxLength={1}
      />

      <p>any massage for the progress</p>

    </div>
  );
}

export default GamePage;
