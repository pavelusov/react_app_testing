import React from 'react';
import pt from 'prop-types';

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the word</span>
    )
  }

  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  )
};

GuessedWords.propTypes = {
  guessedWords: pt.arrayOf(pt.shape({
    guessedWord: pt.string.isRequired,
    letterMatchCount: pt.number.isRequired
  })).isRequired
};

GuessedWords.defaultProps = {
  guessedWords: []
};

export default GuessedWords;
