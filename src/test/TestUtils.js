import checkPropTypes from 'check-prop-types';
import Congrats from "../components/Congrats";

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