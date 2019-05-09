import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UBRoller from './components/UBRoller/UBRoller.jsx'
import Extra from './components/Extra.jsx';

ReactDOM.render(<UBRoller />, document.getElementById('UBRoller-Container'));
// Can I do multiple ReactDOM renders for multiple utilities?
// Then later I can recreate the website using micro services architecture.

ReactDOM.render(<Extra/>, document.getElementById('Extra'));