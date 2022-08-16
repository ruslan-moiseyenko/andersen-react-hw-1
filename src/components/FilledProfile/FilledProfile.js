import React, { Component } from 'react';
import Header from '../Header/Header';
import styles from './FilledProfile.module.css';

class FilledProfile extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header text='Your profile' />
      </div>
    );
  }
}

export default FilledProfile;
