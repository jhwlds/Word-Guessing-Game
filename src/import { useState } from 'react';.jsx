import { useState } from 'react';

function GamePage({ word }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [message, setMessage] = useState('');

  const handleGuess = (letter) => {
    if (!letter.match(/^[a-z]$/)) {
      setMessage('한 글자 알파벳만 입력하세요.');
      return;
    }

    if (guessedLetters.includes(letter)) {
      setMessage('이미 입력한 글자입니다.');
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);

    if (word.includes(letter)) {
      setMessage('🎯 정답!');
    } else {
      setMessage('❌ 틀렸어요.');
    }
  };

  const display = word
    .split('')
    .map((ch) => (guessedLetters.includes(ch) ? ch : '_'))
    .join(' ');

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Guess the Word!</h2>

      <p style={{ fontSize: '2rem', letterSpacing: '1rem' }}>{display}</p>

      <input
        type="text"
        maxLength={1}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleGuess(e.target.value.toLowerCase());
            e.target.value = '';
          }
        }}
        placeholder="Enter a letter"
        autoFocus
      />

      <p style={{ marginTop: '1rem' }}>{message}</p>
    </div>
  );
}

export default GamePage;