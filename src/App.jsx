// App.jsx
import { useState } from 'react';
import GamePage from './GamePage';

function App() {
  const [word, setWord] = useState('');
  const [length, setLength] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const fetchWord = () => {
    setIsLoading(true);
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${length}`)
      .then(res => res.json())
      .then(data => {
        setWord(data[0].toLowerCase());
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Fail to fetch the API:', err);
        setIsLoading(false);
      });
  };

  if (isGameStarted) {
    return <GamePage word={word} />;
  }

  return (
    <div>
      <h1>Word Guessing Game</h1>

      <label htmlFor="length">Choose word length: </label>
      <select
        id="length"
        value={length}
        onChange={e => setLength(Number(e.target.value))}
      >
        {[3, 4, 5, 6, 7, 8, 9].map(num => (
          <option key={num} value={num}>{num} letters</option>
        ))}
      </select>

      <button onClick={fetchWord} style={{ marginLeft: '1rem' }}>Get it!</button>

      <div style={{ marginTop: '1rem' }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : word ? (
          <>
            <p>Word Ready ✔</p>
            <button onClick={() => setIsGameStarted(true)}>Play ▶</button>
          </>
        ) : (
          <p>Please choose a word length and click "Get it!"</p>
        )}
      </div>
    </div>
  );
}

export default App;
