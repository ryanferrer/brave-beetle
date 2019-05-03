import React from 'react';

const ChampionWindow = (props) => {
  console.log(props);
  return (
    <div id="champion-window">
      <div id="champion-portrait">
        <img src={`http://ddragon.leagueoflegends.com/cdn/${props.champion.version}/img/champion/${props.champion.id}.png`}/>
      </div>

      <div id="champion-name">{props.champion.name}</div>
    </div>
  )
}

export default ChampionWindow;