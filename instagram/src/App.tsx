// import React from 'react';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import UserContext from './contexts/user-context';

function App() {
  const [username, setUsername] = useState("");
  
  const Login = lazy(() => import('./pages/login'));
  const Dashboard= lazy(() => import('./pages/dashboard'));
  const UserProfile= lazy(() => import('./pages/userProfile'));
  const Index = lazy(() => import("./pages/index"));
  const SignUp = lazy(() => import("./pages/sign-up"));
  const ErrorPage = lazy(() => import("./pages/error-page"));
  const NotFoundPage = lazy(() => import("./pages/not-found"));

  return (
    <UserContext.Provider value={{username: username, setUsername: setUsername}}>
      <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login onLogin={setUsername}/>} errorElement={<ErrorPage/>}  />
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>}errorElement={<ErrorPage/>} />
          {/* <Route path={ROUTES.INDEX} element={<Index/>}/> */}
          <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}errorElement={<ErrorPage/>} />
          <Route path={ROUTES.PROFILE} element={<UserProfile/>} errorElement={<ErrorPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
