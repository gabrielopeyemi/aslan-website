import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ForgetPassword from './Pages/ForgetPassword';
import Tracking from './Pages/Tracking';
import AddTransaction from './Pages/AddTransaction';
export default function MainRoutes() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path='/register'>
            <SignUp />
          </Route>
          <Route exact path='/forgetpassword'>
            <ForgetPassword />
          </Route>
          <Route exact path='/tracking'>
            <Tracking />
          </Route>
          <Route exact path='/addtransaction'>
            <AddTransaction />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
