// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Info from './components/Information/Information';

function App() {
  return (
    <div className='main'>
      <Header text='Creating a profile' />
      <Info />
    </div>
  );
}

export default App;
