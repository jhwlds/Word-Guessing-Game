function ResultPage({ isWin, word, onRestart }) {
    return (
      <div>
        <h2>{isWin ? '🎉 You Win!' : '😢 Game Over'}</h2> 
        <p>
          {isWin
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
  