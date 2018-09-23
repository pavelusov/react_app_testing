import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from "./test/TestUtils";
import { getSecretWord } from "./redux/actions";
import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store}/>).dive();
};

describe('Redux props', () => {
  test('has access to "success" state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to "secretWord" state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to "guessedWords" state', () => {
    const guessedWords = [ { guessWord: 'agile', letterMatchCount: 1 } ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });
  test('"getSecretWord" actions creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.actions.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe('"getSecretWord" runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    actions: {
      getSecretWord: getSecretWordMock
    }
  };
  // set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props}/>);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1)

});
