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
import agGrid from './agGrid/agGridcreate';
import TentangKami from './pages/tentangkami';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/grid',
    component: agGrid,
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
  },
  {
    path: '/tentangkami',
    component: TentangKami,
  }
];
