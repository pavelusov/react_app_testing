import { getLetterMatchCount } from '../../services';

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
 * @function guessWordCreator
 * @param {object} word - guess word
 * @param {string} word.guessedWord - guess word
 * @param {number} word.letterMatchCount - letter match count
 * @returns {{type: string, payload: {object}}}
 */
export function guessWordCreator(word) {
  return {
    type: actionTypes.GUESS_WORD,
    payload: word
  }
}


/**
 * @function guessWord - Thunk actions for guess word
 * @param {string} guessedWord - guessedWord
 * @returns {Function}
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch(guessWordCreator({ guessedWord, letterMatchCount }))

    if (guessedWord === secretWord) {
      dispatch(correctGuess())
    }
  };
};
