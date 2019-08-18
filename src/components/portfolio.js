import React from 'react';
import portfolioItem from './portfolio-item';
import portfolioList from '../utils/portfolio-list';

export default () => {
  return (
    <section className='portfolio'>
      {portfolioList.map((item, index) => portfolioItem(item, index))}
    </section>
  );
};