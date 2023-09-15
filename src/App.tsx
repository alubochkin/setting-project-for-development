import React, { Fragment, ReactNode, lazy, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PathRouteProps, Route, Routes } from "react-router-dom";
import { AppTheme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { cn } from "./utils/classNames";

const HomePage =  React.lazy(async () => import('./pages/Home'));
const AboutPage = React.lazy(async () => import('./pages/About'));

interface MainRoutes extends  PathRouteProps {
  name: string;
  path: string
}

const routes: MainRoutes[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'About',
    path: '/about',
    element: <AboutPage />
  },

]

const wrapper = (component: ReactNode) => (
	<React.Suspense fallback={<>...load</>}>
			<div className="container">{component}</div>
	</React.Suspense>
);

export function App(): JSX.Element {

  const {theme, toggleTheme} = useTheme();


  const changeTheme = () => {
    toggleTheme();
  };

  return (

    <div className={cn('app', {
      [theme]: !!theme
    })}>
      <div>
        <button onClick={changeTheme}>Change theme</button>
      </div>
      <br />
      <nav>
        {routes.map((r) => <Link key={r.name} to={r.path} >{r.name}</Link>)}
      </nav>
        <Routes>
          {routes.map((r) => <Route key={r.path} path={r.path} element={wrapper(r.element)} />)}
        </Routes>
    </div>
  )
}