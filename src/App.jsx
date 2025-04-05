import { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [length, setLength] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWord = () => {
    setIsLoading(true);
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${length}`)
      .then(res => res.json())
      .then(data => {
        setWord(data[0]);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Fail to fetch the API:', err);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Welcome to the Word Guessing Game!</h1>

      <label htmlFor="length">Choose the length of the word: </label>

      <button onClick={fetchWord}>Get it!</button>

      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : word ? (
          <p>Word: <strong>{word}</strong></p>
        )
        : (
          <p>No word fetched yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
