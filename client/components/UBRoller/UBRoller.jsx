import React, { Component } from 'react';
import ChampionWindow from './ChampionWindow.jsx';
import LoadoutWindow from './LoadoutWindow.jsx';
import RerollButton from './RerollButton.jsx';

class UBRoller extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadoutIsReady: false
    };
  }

  componentDidMount(){
    // should convert this into it's own method later!
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
      loadoutIsReady: true
    }))
  }

  reroll(){
    this.componentDidMount();
  }

  render(){
    if (this.state.loadoutIsReady){
      return (
        <>
          <div>Here's your loadout! GL HF!</div>
          <ChampionWindow champion={this.state.champion}/>
          <LoadoutWindow  boots={this.state.boots} equips={this.state.equips}/>
          <RerollButton/>
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