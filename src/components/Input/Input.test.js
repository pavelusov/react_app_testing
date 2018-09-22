import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, checkProp, storeFactory } from '../../test/TestUtils';
import Input from './';

/**
 * @function setup
 * @param {object} initialState - initial state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // .dive() will return the internals of the <Input /> component
  // <div>
  //    <button></button>
  // </div>
  const wrapper = shallow(<Input store={store}/>).dive();
  console.log(wrapper.debug());
};

setup()

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });
    test('renders input box', () => {

    });
    test('renders submit button', () => {

    });
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });
    test('does not renders input box', () => {

    });
    test('does not renders submit button', () => {

    });
  });

});

describe('update state', () => {
  test('', () => {

  });
});

