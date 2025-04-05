import { useState } from 'react';

function GamePage({ word }) {
  return (
    <div>
      <h2>Guess the World!</h2>

      <p>displaying the guessing process</p>

      <input 
        type="text"
        maxLength={1}
      />

      <p>any massage for the progress</p>

    </div>
  );
}

export default GamePage;
