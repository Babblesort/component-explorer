import React, { Component } from 'react';

class CountedTextarea extends Component {

  constructor(props) {
    super(props);
    const { maxChars = 5000, value = '' } = props;
    this.maxChars = maxChars;
    this.state = {
      value,
      charsRemaining: this.calculateCharsRemaining(value)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  calculateCharsRemaining(text) {
    return this.maxChars - this.calculateTextLength(text);
  }

  calculateTextLength(text) {
    return text.length;
  }

  handleChange(e) {
    this.setState({ 
      value: e.target.value,
      charsRemaining: this.calculateCharsRemaining(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.charsRemaining}</span>
        <textarea value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default CountedTextarea;