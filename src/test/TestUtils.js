import checkPropTypes from 'check-prop-types';

// Helper redux
import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux/reducers';
import { middlewares } from '../redux/configureStore';


/**
 * Create a testing store with imported reducers, middleware
 * @function storeFactory
 * @param initialState - initial state
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducers, initialState);
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