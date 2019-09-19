import 'jquery/dist/jquery.slim.min';
import 'Bootstrap/bootstrap.bundle.min';
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);