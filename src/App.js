// import logo from './logo.svg';
import styles from './App.module.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Info from './components/Information/Information';
import FilledProfile from './components/FilledProfile/FilledProfile';

class App extends Component {
  state = {
    filled: false,
    data: {}
  };
  handleSubmit = (data) => {
    this.setState({ filled: true, data: data });
    console.log(this.state);
  };

  render() {
    return (
      <div className={styles.main}>
        {!this.state.filled && <Header text='Creating a profile' />}
        {!this.state.filled && <Info onSubmit={this.handleSubmit} />}
        {this.state.filled && <FilledProfile />}
      </div>
    );
  }
}
export default App;
