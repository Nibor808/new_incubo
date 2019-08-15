import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section className='business'>
      <article className='row'>
        <div className='col'>
          <h4>
            Online Business Brochure/Catalog Website
          </h4>
          <p>
            Simply put if you are not tapping into this market you are missing out! A unique and productive website WILL
            attract more people to your business by providing an easily accessable entry point for your products or
            services.
          </p>
          <p>
            In the days before the Internet, people used print, radio, and television media to spread the word about their
            businesses. Now you can cast a large net, reaching literally millions of people all over the world with just
            one website.
          </p>
          <p>
            There are many businesses that deal in products or services that are not available over the web - think
            mechanic, day-care center or hair-stylist.
            An online brochure or catalog can show anyone who finds your website photos and descriptions of your products
            and services.
          </p>
        </div>
      </article>

      <article className='row'>
        <div className='col'>
          <h4>
            E-Commerce Website
          </h4>
          <p>
            You don't have to be Amazon.com to benefit from an e-commerce website. There are millions of business that use
            their e-commerce websites to sell products over the internet.
          </p>
          <p>
            Studies show that you have about 15 seconds from the first screen view of your website to capture your
            prospective customer and keep them on your site. Your home or landing page needs to get their attention
            through a mix of images and copy that has an immediate impact and compels them to continue on and explore your
            products.
          </p>
          <p>
            Presenting the products you sell in an easy to follow yet engaging manner will do some of the marketing work
            for you. Well constructed descriptions that anticipate and answer as many questions as may arise in your
            customers mind combined with clear images that stimulate your customers desire for your products are integral
            for your e-commerce websites success.
          </p>
          <p>
            Providing a shopping cart for most e-commerce sites is essential. It allows your customer to buy more than one
            product at a time and encourages them to continue shopping. The ability to add and remove items, seeing a
            running total as well as any shipping costs adds transparency to your customers purchasing experience.
          </p>
        </div>
      </article>

      <article className='row'>
        <div className='col'>
          <p>Let's connect to develop and grow your online business.</p>
          <h4><Link to='/contact'>Get In Touch!</Link></h4>
        </div>
      </article>
    </section>
  );
};