import React,{Suspense, lazy} from 'react'
import {Route, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/user-context'
import * as ROUTES from '../constants/routes';
import { postType } from '../components/post/postType';
import { BrowserRouter as Router, Routes,  } from 'react-router-dom';

export default function Index() {
  
  const Dashboard= lazy(() => import('../pages/dashboard'));
  const UserProfile= lazy(() => import('../pages/userProfile'));
  const ErrorPage = lazy(() => import("../pages/error-page"));

  return (
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} errorElement={<ErrorPage/>} />
          <Route path={ROUTES.PROFILE} element={<UserProfile/>} errorElement={<ErrorPage/>} />
        </Routes>
      </Suspense>
  );
}
