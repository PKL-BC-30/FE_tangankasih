import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';
import Login from './pages/login';
import Donasi from './pages/donasi';
import PageDonasi from './pages/donasi-page';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/donasi',
    component: Donasi,
  },
  {
    path: '/donasi-page',
    component: PageDonasi,
  },
];
