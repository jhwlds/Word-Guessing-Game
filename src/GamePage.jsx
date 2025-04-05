import { useState } from 'react';

function GamePage({ word }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [message, setMassage] = useState('');

  const display = word
    .split('')
    .map((ch) => (guessedLetters.includes(ch) ? ch : '_'))
    .join(' ');
  
  const handleGuess = (letter) => {
    if (!letter.match(/^[a-z]$/)) {
      setMassage('Please enter an alphabet letter');
      return;
    }
      
  }

  return (
    <div>
      <h2>Guess the World!</h2>

      <p>{display}</p>

      <input 
        type="text"
        maxLength={1}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleGuess(e.target.value.toLowerCase());
            e.target.value = '';
          }

        }}

      />

      <p>{message}</p>

    </div>
  );
}

export default GamePage;
