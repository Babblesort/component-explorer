import React, { Component } from 'react';
import './counted-textarea.css';

class CountedTextarea extends Component {

  constructor(props) {
    super(props);
    const { maxChars = 5000, value = '' } = props;
    this.maxChars = maxChars;
    this.state = this.getStateForText(value);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className={`counted-textarea-container ${this.state.hasExceededMax ? 'negative' : ''}`}>
        <span className="char-counter">{this.state.charsRemaining}</span>
        <textarea value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }

  getStateForText(text) {
    return {
      value: text,
      charsRemaining: this.charsRemaining(text),
      hasExceededMax: this.hasExceededMax(text)
    }
  }

  hasExceededMax(text) {
    return this.charsRemaining(text) < 0;
  }

  charsRemaining(text) {
    return this.maxChars - this.textLength(text);
  }

  textLength(text) {
    return text.length;
  }

  handleChange(e) {
    this.setState(this.getStateForText(e.target.value));
  }
}

export default CountedTextarea;