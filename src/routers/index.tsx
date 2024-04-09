import { lazy, Suspense, ReactElement, FC } from 'react';
import { useRoutes, RouteObject, Navigate } from 'react-router-dom';

import { CircularProgress } from '@nextui-org/react';

const Layouts = lazy(() => import('@/layouts'));
const Home = lazy(() => import('@/pages/home'));
const Mini = lazy(() => import('@/pages/mini'));
const Theme = lazy(() => import('@/pages/theme'));
const MV = lazy(() => import('@/pages/mv'));
const Playmv = lazy(() => import('@/pages/mv/playmv'));
const Search = lazy(() => import('@/pages/search'));
const Music = lazy(() => import('@/pages/music'));
const PlaylistDetail = lazy(() => import('@/pages/playlists/playlistDetail'));
const Download = lazy(() => import('@/pages/download'));

// 加载提示组件
const LoadingTip = (Component: ReactElement): ReactElement => (
  <Suspense fallback={<CircularProgress />}>{Component}</Suspense>
);

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Layouts />,
    children: [
      // 重定向设置：当访问 "/" 时自动跳转到 "/home"
      { path: '/', element: <Navigate to="/home" replace /> },
      {
        path: 'home',
        element: LoadingTip(<Home />),
        // meta: {
        //   requiresAuth: true,
        //   title: "首页",
        //   key: "home",
        // },
      },
      {
        path: 'mini',
        element: LoadingTip(<Mini />),
      },
      {
        path: 'theme',
        element: LoadingTip(<Theme />),
      },
      {
        path: 'search',
        element: LoadingTip(<Search />),
      },
      {
        path: 'music',
        element: LoadingTip(<Music />),
      },
      {
        path: 'mv',
        element: LoadingTip(<MV />),
      },
      {
        path: 'playmv/:id',
        element: LoadingTip(<Playmv />),
      },
      {
        path: 'playlistDetail/:id',
        element: LoadingTip(<PlaylistDetail />),
      },
      {
        path: 'download',
        element: LoadingTip(<Download />),
      },
    ],
  },
];

const Router: FC = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
