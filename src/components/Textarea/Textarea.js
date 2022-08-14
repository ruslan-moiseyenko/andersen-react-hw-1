import React from 'react';
import './Textarea.module.css'

class Textarea extends React.Component {
  render() {
    return (
      <div className='textarea'>
          <label>
          {this.props.text}
          <textarea
            rows={this.props.rows}
            placeholder={this.props.placeholder}
          />
        </label>
      </div>
    );
  }
}

export default Textarea;
