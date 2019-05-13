import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './styles/main.css'
import ReactDOM from 'react-dom';
import Kabuto from './components/Kabuto/Kabuto.jsx'
import Extra from './components/Extra.jsx';
import Hercules from './components/Hercules/Hercules.jsx'

ReactDOM.render(<Kabuto />, document.getElementById('Kabuto'));
// Can I do multiple ReactDOM renders for multiple utilities?
// Then later I can recreate the website using micro services architecture.

ReactDOM.render(<Extra/>, document.getElementById('Extra'));

ReactDOM.render(<Hercules />, document.getElementById('Hercules'))