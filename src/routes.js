import Landing from './components/landing';
import Portfolio from './components/portfolio';
import PersonalSite from './components/personal_site';
import BusinessSite from './components/business_site';
import AboutUs from './components/about_us';
import Contact from './components/contact';

export default [
  {
    path: '/',
    exact: true,
    component: Landing
  },
  {
    path: '/portfolio',
    exact: true,
    component: Portfolio
  },
  {
    path: '/personal',
    exact: true,
    component: PersonalSite
  },
  {
    path: '/business',
    exact: true,
    component: BusinessSite
  },
  {
    path: '/about_us',
    exact: true,
    component: AboutUs
  },
  {
    path: '/contact',
    exact: true,
    component: Contact
  }
];