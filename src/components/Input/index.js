import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import { guessWord } from "../../redux/actions";

export class UnconnectedInput extends Component {
  constructor() {
    super();
    this.refInputBox = createRef();
  }

  onSubmitGuessedWord = (e) => {
    e.preventDefault();
    const guessedWord = this.refInputBox.current.value;

    if (guessedWord && guessedWord.length > 0) {
      this.props.actions.guessWord(guessedWord);
    }

    this.refInputBox.current.value = '';
  };

  render() {
    let contents = (this.props.success)
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            ref={this.refInputBox}
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={this.onSubmitGuessedWord}
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

export default connect(mapStateToProps, dispatchToProps)(UnconnectedInput);
