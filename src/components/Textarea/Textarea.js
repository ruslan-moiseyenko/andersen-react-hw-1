import React from 'react';
import styles from './Textarea.module.css';

class Textarea extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e);
  };
  render() {
    return (
      <div className={styles.textarea}>
        <label>
          {this.props.text}
          <textarea {...this.props} onChange={this.handleChange} />
        </label>
        <div className={styles.characters}>
          Characters left:{' '}
          <span className={styles.count}>{600 - this.props.value.length}</span>
        </div>
      </div>
    );
  }
}

export default Textarea;
