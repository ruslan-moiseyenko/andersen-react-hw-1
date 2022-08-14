import React from 'react';
import './Input.module.css';

class Input extends React.Component {
  render() {
    return (
      <div className='input'>
      <label>
        {this.props.header}
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          // value={''}
          // onChange={this.handleChange}
        />
      </label>
      </div>
    );
  }
}

export default Input;
