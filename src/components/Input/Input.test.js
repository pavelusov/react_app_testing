import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, checkProp, storeFactory } from '../../test/TestUtils';
import Input, { UnconnectedInput } from './';
import { guessWord } from "../../redux/actions";

/**
 * @function setup
 * @param {object} initialState - initial state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store}/>).dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });

});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('"guessWord" action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.actions.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
});

describe('"guessWord" action creator call', () => {
  let wrapper;
  let guessWordMock;
  const guessedWord = 'train';
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      actions: {
        guessWord: guessWordMock
      }
    };
    wrapper = shallow(<UnconnectedInput {...props} />);

    // add value to the input box
    wrapper.instance().refInputBox.current = { value: guessedWord };

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    // Simulation clicked
    submitButton.simulate('click', {
      preventDefault: () => {
      }
    });
  });


  test('calls "guessWord" when button is clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;

    expect(guessWordCallCount).toBe(1)
  });

  test('calls "guessWord" with input value as argument', () => {
    // there is passed from this.props.action.guessWord('train')
    const guessWordArgument = guessWordMock.mock.calls[0][0];

    expect(guessWordArgument).toBe(guessedWord)
  });

});
