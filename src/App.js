import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord } from "./redux/actions";
import './App.css';
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";

const guessedWords = [
  { guessedWord: 'train', letterMatchCount: 3 },
  { guessedWord: 'land', letterMatchCount: 1 },
  { guessedWord: 'party', letterMatchCount: 5 }
];

class App extends Component {

  render() {
    const {success, guessedWords} = this.props;
    return (
      <div className="App container">
        <h1>Game</h1>
        <Congrats
          success={success}
        />
        <Input/>
        <GuessedWords
          guessedWords={guessedWords}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

const dispatchToProps = () => {
  return {
    actions: {getSecretWord}
  }
};

export default connect(mapStateToProps, dispatchToProps)(App);
