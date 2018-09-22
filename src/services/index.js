/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word
 * @param {string} secretWord - guessed word, secret word
 * @returns {number} - Number of letters matched between guessed word, secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}