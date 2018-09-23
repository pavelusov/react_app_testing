import { storeFactory } from '../test/TestUtils';
import { guessWord, correctGuess } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulWord = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess (обновляется корректно для неудачной догадки)', () => {
      // dispatch guessWord()
      store.dispatch(guessWord(unsuccessfulWord));
      // get state
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [ {
          guessedWord: unsuccessfulWord,
          letterMatchCount: 3
        } ]
      };

      // expect
      expect(newState).toEqual(expectedState);

    });
    test('updates state correctly for successful guess (обновляется корректно для удачной догадки)', () => {
      store.dispatch(guessWord(secretWord));
      // store.dispatch(correctGuess());// success == true

      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [ {
          guessedWord: secretWord,
          letterMatchCount: 5
        } ]
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('guessed words', () => {
    const guessedWords = [ { guessWord: 'agile', letterMatchCount: 1 } ];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store  = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess (обновляется корректно для неудачной догадки)', () => {
      store.dispatch(guessWord(unsuccessfulWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulWord, letterMatchCount: 3  }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess (обновляется корректно для удачной догадки)', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5  }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  })
});
