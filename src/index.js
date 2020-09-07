import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const menu = [
    {
        label : 'Home',
        link: '/'
    },
    {
        label : 'About',
        link: '/about'
    },
    {
        label : 'Contact',
        link: '/contact'
    },
];
ReactDOM.render(
  <React.StrictMode>
    <App menu={menu} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
