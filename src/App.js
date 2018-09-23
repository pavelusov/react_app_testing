import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.actions.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="App container">
        <h1>Game</h1>
        <div>The secret word is {this.props.secretWord}</div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getSecretWord: bindActionCreators(getSecretWord, dispatch) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
