import React, { Component } from 'react';

class Hercules extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#">Brave Beetle</a>
          <button className="btn btn-primary">Log in</button>
          <button className="btn btn-outline-primary">Sign up</button>
        </nav>
      </>
    )
  }
}

export default Hercules;