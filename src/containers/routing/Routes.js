import React, {lazy,Suspense} from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';


const Dashboard = lazy(() => import('../dashboard/Dashboard'))
const Users = lazy(() => import('../users/Users'))
const NotFound = lazy(() => import('../layout/NotFound'))
const PrivateRoute = lazy(() => import('../routing/PrivateRoute'))
const Viewprofile = lazy(() => import('../users/Viewprofile'))
const UserDetails = lazy(() => import('../users/UserDetails'))
const Feedback  = lazy(() => import('../Feedback/Feedback'))
const FeedbackDetails  = lazy(() => import('../Feedback/FeedbackDetails'))





const Routes = props => {
  return (
    <section >
   
      <Switch>
     
     
   
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/userdetail" component={UserDetails}/>
       
        <PrivateRoute exact path="/profile" component={Viewprofile}/>
        <PrivateRoute exact path="/feedback" component={Feedback}/>
        <PrivateRoute exact path="/feedbackdetails/:id" component={FeedbackDetails}/>

        
        <PrivateRoute exact path="/users" component={Users}/>
        <PrivateRoute exact path="/viewuser/:id" component={UserDetails}/>



        
        {/* <PrivateRoute exact path="/orderdetail/:id" component={PaymentDetail}/> */}


        {/* <PrivateRoute exact path="/products/categorydetail/:categoryId" component={CategoryDetails}/>
        
        */}
        
        
      
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
