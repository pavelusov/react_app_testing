/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} value - data attribute of value
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
};
