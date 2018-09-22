import checkPropTypes from 'check-prop-types';

// Helper redux
import { createStore } from 'redux';
import reducers from '../redux/reducers';

/**
 * @function storeFactory
 * @param initialState - initial state
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(reducers);
};

/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} value - data attribute of value
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
};

export const checkProp = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};