import { useState } from 'react';

function GamePage({ word }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [message, setMessage] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(7);

  const display = word
    .split('')
    .map((ch) => (guessedLetters.includes(ch) ? ch : '_'))
    .join(' ');
  
  const handleGuess = (letter) => {
    if (!letter.match(/^[a-z]$/)) {
      setMessage('Please enter an alphabet letter');
      return;
    }
    const updateGuesses = [...guessedLetters, letter];
    setGuessedLetters(updateGuesses);

    if (guessedLetters.includes(letter)) {
      setMessage('You already guessed that letter!');
      return;
    }

    if (word.includes(letter)) {
      setMessage('Good guess!');
    } else {
      const newAttempts = remainingAttempts - 1;
      setRemainingAttempts(newAttempts);

      if (remainingAttempts === 1) {
        setMessage(`Game Over! The word was "${word}"`);
        setGuessedLetters([]);
        setRemainingAttempts(6);
      } else {
        setMessage(`Wrong guess! ${newAttempts} attempts left`);
      }
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
        placeholder='Enter an alphabet letter'
        autoFocus
      />

      <p>{message}</p>

    </div>
  );
}

export default GamePage;
