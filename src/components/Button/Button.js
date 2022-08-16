import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.button} type={this.props.type}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
