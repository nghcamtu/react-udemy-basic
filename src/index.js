import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppHook from './App-hook';

ReactDOM.render(<App />, document.getElementById('root')); //render component App vào cái element có id là root
// ReactDOM.render(<AppHook/>, document.getElementById('root'));
registerServiceWorker();
