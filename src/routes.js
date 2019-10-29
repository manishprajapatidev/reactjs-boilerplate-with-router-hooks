import React from 'react';

const Feeds = React.lazy(() => import('./views/Feeds'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/feeds', name: 'Feeds', component: Feeds }
];

export default routes;
