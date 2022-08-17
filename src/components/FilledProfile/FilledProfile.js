import React, { Component } from 'react';
import Header from '../Header/Header';
import styles from './FilledProfile.module.css';

class FilledProfile extends Component {
  render() {
    const { name, surname, date, phone, site, about, stack, project } =
      this.props.data;
    return (
      <div className={styles.main}>
        <Header text='Your filled profile' />
        <h2>Your Name is: {name}</h2>
        <h2>Your surname is: {surname}</h2>
        <h2>Your date is: {date}</h2>
        <h2>Your phone is: {phone}</h2>
        <h2>Your site is: {site}</h2>
        <h2>Your about is: {about}</h2>
        <h2>Your stack is: {stack}</h2>
        <h2>Your project is: {project}</h2>
      </div>
    );
  }
}

export default FilledProfile;
