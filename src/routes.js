import Landing from './components/landing';
import NotFound from './components/not_found';

export default [
  {
    path: '/',
    exact: true,
    component: Landing
  },
  {
    path: '*',
    component: NotFound
  }
];