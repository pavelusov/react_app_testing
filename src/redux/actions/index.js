export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};

/**
 * @function correctGuess
 * @return {object} - action with type CORRECT_GUESS
 */
export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS,
  }
}

/**
 * @function guessWord - Thunk actions for guess word
 * @param guessedWord - guessedWord
 * @returns {Function}
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {

  };
};
