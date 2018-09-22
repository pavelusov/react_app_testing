import React, { Component } from 'react';

import './App.css';
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

const guessedWords = [
  { guessedWord: 'train', letterMatchCount: 3 },
  { guessedWord: 'land', letterMatchCount: 1 },
  { guessedWord: 'party', letterMatchCount: 5 }
];

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Game</h1>
        <Congrats
          success={true}
        />
        <GuessedWords
          guessedWords={guessedWords}
        />
      </div>
    );
  }
}

export default App;
