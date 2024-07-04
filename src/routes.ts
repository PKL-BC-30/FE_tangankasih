import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';
import Login from './pages/login';
import Donasi from './pages/donasi';
import PageDonasi from './pages/donasi-page';
import Register from './pages/register';
import Donate from './pages/donate';
import Blog from './pages/blog';

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
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/donate',
    component: Donate,
  },
  {
    path: '/blog',
    component: Blog,
  }
];
