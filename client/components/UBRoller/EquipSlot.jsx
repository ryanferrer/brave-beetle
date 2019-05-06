import React from 'react';

const EquipSlot = (props) => {
  return (
    <div id="equips-slot">
      <img src={`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/item/${props.item.image.full}`}/>
    </div>
  );
}

export default EquipSlot;