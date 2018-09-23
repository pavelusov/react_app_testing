import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from "../../redux/actions";

class Input extends Component {
  render() {
    let contents = (this.props.success)
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
          >Submit
          </button>
        </form>
      );

    return (
      <div
        data-test="component-input"
      >
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

const dispatchToProps = ()=>{
  return {
    actions: {
      guessWord
    }
  }
};

export default connect(mapStateToProps, dispatchToProps)(Input);
