import React from 'react';

const ChampionWindow = (props) => {
  console.log(props);
  return (
    <div id="champion-window">
      <div id="champion-portrait">
        <img src={`http://ddragon.leagueoflegends.com/cdn/${props.champion.version}/img/champion/${props.champion.id}.png`}/>
      </div>

      <h2 id="champion-name">{props.champion.name}</h2>
    </div>
  )
}

export default ChampionWindow;