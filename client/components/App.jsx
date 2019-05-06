import React, { Component } from 'react';
import UBRoller from './UBRoller/UBRoller.jsx';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div>:^)</div>
        <UBRoller/>
      </>
    )
  }
}

export default App;