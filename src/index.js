import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import RegForm from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RegForm />, document.getElementById("regForm"));
registerServiceWorker();
