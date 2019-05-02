import React, { Component } from 'react';

class UBRoller extends Component {
  constructor(props){
    super(props);

    this.state = {
      champion: null,
      boots: null,
      equips: null,
      showCard: false
    };
  }

  componentDidMount(){
    Promise.all([
      fetch('/champion'),
      fetch('/boots'),
      fetch('/equips')
    ]).then(([champion, boots, equips]) => {
      return [champion.json(), boots.json(), equips.json()]
    }).then(([champion, boots, equips]) => {
      console.log(champion, boots, equips);
    });

    // fetch('/champion')
    // .then(data => {
    //   return JSON.stringify(data.json());
    // })
    // .then(data => {
    //   this.setState({
    //     champion: data,
    //     showCard: true
    //   }, this.render)
    // });
  }

  reroll(){
    this.componentDidMount();
  }

  render(){
    if (this.state.showCard === false) {
      return (
        <>
          <button onClick={() => this.reroll()}>Click to Roll</button>
        </>
      )
    }

    if (this.state.showCard === true) {
      return (
        <>
          <div>Here's your loadout! GL HF!</div>
          <div>{this.state.champion}</div>
          <div>{this.state.boots}</div>
          <div>{this.state.equips}</div>
          <button onClick={() => this.reroll()}>Reroll</button>
        </>
      )
    }
  }
}

export default UBRoller;