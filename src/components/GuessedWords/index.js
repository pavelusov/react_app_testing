import React from 'react';
import pt from 'prop-types';

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the word</span>
    )
  } else {
    contents = (
      <div data-test="guessed-words">
        <h2>table guessed words</h2>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>guess</th>
              <th>matching letters</th>
            </tr>
          </thead>
          <tbody>
          {
            props.guessedWords.map(( word, i ) => (
              <tr
                data-test="guessed-word"
                key={ i }
              >
                <td>{ word.guessedWord }</td>
                <td>{ word.letterMatchCount }</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
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
    guessedWord: pt.string,
    letterMatchCount: pt.number
  })).isRequired
};

GuessedWords.defaultProps = {
  guessedWords: []
};

export default GuessedWords;
