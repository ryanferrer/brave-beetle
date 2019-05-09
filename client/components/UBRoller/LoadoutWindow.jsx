import React from 'react';
import EquipSlot from './EquipSlot.jsx'

const LoadoutWindow = (props) => {
  console.log(props);
  return (
    <div id="loadout-window">
      <div id="boots-slot">
        <img src={`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/item/${props.boots.image.full}`}/>
      </div>
      <div id="equips">
        {props.equips.map((item, i) => {
          return (
            <EquipSlot item={item} key={i}/>
          )
        })}
      </div>
    </div>
  )
}

export default LoadoutWindow;