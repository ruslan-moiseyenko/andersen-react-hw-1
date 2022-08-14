import React from 'react';
import './Button.module.css';

class Button extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
  };

  render() {
    return (
      <button type={this.props.type} onSubmit={this.handleSubmit}>
        {this.props.text}{' '}
      </button>
    );
  }
}

export default Button;
