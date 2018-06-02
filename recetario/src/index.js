import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import registerServiceWorker from './registerServiceWorker';


import Wrapper from './components/Wrapper';
// import Wrapper from './components/Wrapper';

const root = document.getElementById("root");
if (root instanceof HTMLElement) {
    ReactDOM.render(< Wrapper />, root);
    registerServiceWorker();
}

