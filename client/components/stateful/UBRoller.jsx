import React, { Component } from 'react';

class UBRoller extends Component {
  constructor(props){
    super(props);

    this.state = {
      showCard: false
    };
  }

  componentDidMount(){
    Promise.all([
      fetch('/champion'),
      fetch('/boots'),
      fetch('/equips')
    ])
    .then(([champion, boots, equips]) => Promise.all([champion.json(), boots.json(), equips.json()]))
    .then(([champion, boots, equips]) => this.setState({
      champion,
      boots,
      equips,
      showCard: true
    }))
  }

  reroll(){
    this.componentDidMount();
  }

  render(){
    if (this.state.showCard){
      return (
        <>
          <div>Here's your loadout! GL HF!</div>
          <div>{this.state.champion.id}</div>
          <div>{this.state.boots.name}</div>
          {this.state.equips.map((item, key) => {
            return (
              <> 
                <div id={key}>{item.name}</div>
              </>
            )
          })}
          <button onClick={() => this.reroll()}>Reroll</button>
        </>
      );
    } else {
      return (
        <>
          <div>Loading...</div>
        </>
      )
    }
  }
}

export default UBRoller;