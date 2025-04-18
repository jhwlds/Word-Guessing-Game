import { useState, useEffect } from 'react';
import ResultPage from './ResultPage';

function GamePage({ word, onRestart }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [message, setMessage] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(7);
  const [isOver, setIsOver] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const display = word
    .split('')
    .map((ch) => (guessedLetters.includes(ch) ? ch : '_'))
    .join(' ');

    useEffect(() => {
      if (word && !isOver) {
        const allGuessed = word
          .split('')
          .every(ch => guessedLetters.includes(ch));

        if (allGuessed) {
          setIsWon(true);
          setIsOver(true);
        }
      }
    }, [guessedLetters, word, isOver]);

  const handleGuess = (letter) => {
    if (!letter.match(/^[a-z]$/)) {
      setMessage('Please enter an alphabet letter');
      return;
    }


    if (guessedLetters.includes(letter)) {
      setMessage('You already guessed that letter!');
      return;
    }

    const updateGuesses = [...guessedLetters, letter];
    setGuessedLetters(updateGuesses);

    if (word.includes(letter)) {
      setMessage('Good guess!');
    } else {
      const newAttempts = remainingAttempts - 1;
      setRemainingAttempts(newAttempts);

      if ( newAttempts === 0) {
        setIsOver(true);
        setIsWon(false);
      } else {
        setMessage(`Wrong guess! ${newAttempts} attempts left`);
      }
    }

  }

  if (isOver) {
    return <ResultPage isWon={isWon} word={word} onRestart={onRestart}/>;
  }

  return (
    <div>
      <h2>Guess the World!</h2>
      <p>Available Attempts: {remainingAttempts}</p>
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
