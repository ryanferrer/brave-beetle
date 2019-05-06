import React from 'react';

const RerollButton = (props) => {
  return (
    <div id="reroll-button">
      <div className="btn-group">
        <button type="button" className="btn btn-secondary" disabled>{props.rerolls}</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => props.reroll()}>Reroll!</button>
      </div>
    </div>
  );
}

export default RerollButton;