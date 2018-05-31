import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import MyRouter from './components/Router';
import Wrapper from './components/Wrapper';

const root = document.getElementById("root");
if (root instanceof HTMLElement) {
    ReactDOM.render(< MyRouter/>, root);
    registerServiceWorker();
}

