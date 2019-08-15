import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from './components/header';
import Footer from './components/footer';

export default () => {
  return (
    <div>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </div>
  );
};