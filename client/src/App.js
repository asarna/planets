import React, { Component } from 'react';
import './App.css';
import getWord from './getWord';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
  }

  word() {
    getWord('dog', (res) => {
      console.log('response', res.data);
      this.setState({
        word: 'word ' + JSON.stringify(res.data)
      })
    })
  }

  render() {
    if(this.state.word === '') {
      this.word();
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          { this.state.word }
        </p>
      </div>
    );
  }
}

export default App;
