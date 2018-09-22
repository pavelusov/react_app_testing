import React from 'react';


/**
 * Компонент который возвращает поздравление
 * @function
 * @param {object} props - React props
 * @returns {JSX.component}
 */
export default (props) => (
  <div
    data-test="component-congrats"
  >
    {
      props.success && (
        <div data-test="congrats-message">congratulations</div>
      )
    }
  </div>
)