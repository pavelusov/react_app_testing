import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, checkProp } from '../../test/TestUtils';
import GuessedWords from './index';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

/**
 * @function setup
 * @param {object} props
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
 const setupProps = { ...defaultProps, ...props };

 return shallow(<GuessedWords { ...setupProps }/>)
};

test('does not throw warning with expected props', () => {
  checkProp(GuessedWords, defaultProps);
});

describe('if there are no word guessed (если нет догадок)', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({guessedWords: []});
  });

  test('renders without error (рендериться без ошибок)', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess word (инструкция для угадывания)', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are word guessed (если есть догадки)', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'land', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({guessedWords});
  });

  test('renders without error (рендериться без ошибок)', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders "guessed word" section (отображается раздел)', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1)
  });

  test('correct number of guessed words (правильное количество угаданных слов)', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  })
});
