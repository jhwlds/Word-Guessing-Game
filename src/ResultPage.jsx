function ResultPage({ isWon, word, onRestart }) {
    return (
      <div>
        <h2>{isWon ? '🎉 You Won!' : '😢 Game Over'}</h2> 
        <p>
          {isWon
            ? 'Nice!'
            : `It was "${word}". You got this next time!`}
        </p>
  
        <button onClick={onRestart} style={{ marginTop: '1rem' }}>
          Give me one more shot!
        </button>
      </div>
    );
  }
  
  export default ResultPage;
  