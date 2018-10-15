///React imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

///Imports for Bootstrap 4.1.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.slim';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

///Import css files
import './assets/css/main.css';
import './assets/css/images.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
