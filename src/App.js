// import logo from './logo.svg';
import styles from './App.module.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Info from './components/Information/Information';

class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header text='Creating a profile' />
        <Info />
      </div>
    );
  }
}
export default App;
