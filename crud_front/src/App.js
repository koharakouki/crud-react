import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <MainContainer />
        <div></div>
      </div>
    );
  }
}

export default App;