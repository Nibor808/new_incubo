import 'jquery/dist/jquery.slim.min';
import 'Bootstrap/bootstrap.bundle.min';
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// eslint-disable-next-line no-console
if (process.env.DEPLOY_MODE !== 'production') console.log('deploy mode', process.env.DEPLOY_MODE);

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);