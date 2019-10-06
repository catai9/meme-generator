import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './src/App';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById("root"));
