import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProp } from '../../test/TestUtils';
import checkPropTypes from 'check-prop-types';


import Congrats from './index';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param { object } props
 * @return { ShallowWrapper }
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props}/>);
  if (state) wrapper.setState(state);
  return wrapper;
};


test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non empty congrats message when `success` props is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProp(Congrats, expectedProps);
});

