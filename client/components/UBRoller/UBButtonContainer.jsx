import React from 'react';
import RerollButton from './RerollButton.jsx';
import LockInButton from './LockInButton.jsx';

const UBButtonContainer = (props) => {
  return (
    <div id="UB-Button-Container">
      <RerollButton reroll={props.reroll} rerolls={props.rerolls}/>
      <LockInButton/> 
    </div>
  );
}

export default UBButtonContainer;