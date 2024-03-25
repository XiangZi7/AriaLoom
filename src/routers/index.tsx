import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import { lazy, Suspense, ReactElement } from "react";
import { CircularProgress } from "@nextui-org/react";

const Layouts = lazy(() => import("@/layouts"));
const Home = lazy(() => import("@/pages/home"));
const Mini = lazy(() => import("@/pages/mini"));
const Theme = lazy(() => import("@/pages/theme"));

// 加载提示组件
const LoadingTip = (Component: ReactElement): ReactElement => (
  <Suspense fallback={<CircularProgress />}>{Component}</Suspense>
);

const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layouts />,
    children: [
      // 重定向设置：当访问 "/" 时自动跳转到 "/home"
      { path: "/", element: <Navigate to="/home" replace /> },
      {
        path: "home",
        element: LoadingTip(<Home />),
        // meta: {
        //   requiresAuth: true,
        //   title: "首页",
        //   key: "home",
        // },
      },
      {
        path: "mini",
        element: LoadingTip(<Mini />),
      },
      {
        path: "theme",
        element: LoadingTip(<Theme />),
      },
    ],
  },
];

const Router: React.FC = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
