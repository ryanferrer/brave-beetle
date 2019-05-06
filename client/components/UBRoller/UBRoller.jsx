import React, { Component } from 'react';
import ChampionWindow from './ChampionWindow.jsx';
import LoadoutWindow from './LoadoutWindow.jsx';
import UBButtonContainer from './UBButtonContainer.jsx'
import UBstyler from '../../styles/UBRoller.css';

class UBRoller extends Component {
  constructor(props){
    super(props);

    this.state = {
      rerolls: 2,
      loadoutIsReady: false
    };
  }

  componentDidMount(){
    this.getLoadOut();
  }

  getLoadOut(){
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
    let rerolls = this.state.rerolls;

    if (rerolls > 0 && rerolls <= 2){
      this.getLoadOut();
      this.setState({
        rerolls: this.state.rerolls - 1
      });
    } 
  }

  render(){
    if (this.state.loadoutIsReady){
      return (
        <div id="ub-roller" className="card">
          <h1>Here's your loadout! GL HF!</h1>
          <div id="lol-container">
            <ChampionWindow champion={this.state.champion}/>
            <LoadoutWindow  boots={this.state.boots} equips={this.state.equips}/>
          </div>
            <UBButtonContainer reroll={this.reroll.bind(this)} rerolls={this.state.rerolls}/>
        </div>
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