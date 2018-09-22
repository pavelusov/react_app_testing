import React from 'react';
import pt from 'prop-types';

/**
 * Компонент который возвращает поздравление
 * @function
 * @param {object} props - React props
 * @returns {JSX.component}
 */
const Congrats = (props) => (
  <div
    data-test="component-congrats"
  >
    {
      props.success && (
        <div
          className="alert alert-success"
          data-test="congrats-message">Congratulations! Вы угадали слово!
        </div>
      )
    }
  </div>
);

Congrats.propTypes = {
  success: pt.bool.isRequired
};

Congrats.defaultProps = {
  success: false
};

export default Congrats;
