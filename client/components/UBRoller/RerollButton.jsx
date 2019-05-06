import React from 'react';

const RerollButton = (props) => {
  return (
    <div id="reroll-button">
      <button type="button" className="btn btn-outline-primary" onClick={() => props.reroll()}>Reroll!</button>
    </div>
  );
}

export default RerollButton;