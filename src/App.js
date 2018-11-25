import React, { Component } from 'react';
import './App.scss';
import MakeButton from './makeButton';

class App extends Component {
  state = {
    number : [1,2,3,4]
  }
  soohan = (e) =>{
    this.setState({
      vlaue: e.target.vlaue,
      renderNum : true
    })
  }
  render() {
    return (
      <div className="App">
        <MakeButton></MakeButton>
      </div>
    );
  }
}

export default App;
