import { actionTypes } from '../actions';

/**
 * @function guessedWordReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {array}  - new guessed words state
 */
export default function guessedWordReducer(state = [], action) {
  switch ( action.type ) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];

    default:
      return state;
  }
}