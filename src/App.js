import React, { Fragment, useEffect,lazy,Suspense } from 'react';
import { BrowserRouter, HashRouter , Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';


import Routes from './containers/routing/Routes';
import SideBar from './containers/dashboard/SideBar';
import Login from './containers/auth/Login';


import { LOGOUT } from './actions/types';


import { loadUser } from './actions/authAction';
import setAuthToken from './utils/setAuthToken';

import Spinner from './containers/layout/Spinner';
import {ToastContainer} from 'react-toastify'
const ForgotPassword = lazy(() => import('./containers/auth/ForgotPassword'));
const forgotCode = lazy(() => import('./containers/auth/ForgotCode'))
const ResetPassword = lazy(() => import('./containers/auth/ResetPassword'))


const App = () => {
  useEffect(() => {
    
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  

  return (
    <Provider store={store}>
      {/* <BrowserRouter basename="/lug_react"> */}
      <HashRouter >
      <Suspense fallback={<><Spinner/></>}>
        <Fragment>
         <SideBar /> 
          <Switch>
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/forgotcode" component={forgotCode} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            <Route exact path="/" component={Login} />
     
            
            
            <Route component={Routes} />
            <ToastContainer autoClose={3000}/>
          </Switch>
        </Fragment>
        </Suspense>
        </HashRouter>
      {/* </BrowserRouter> */}
    </Provider>
  );
};

export default App;
