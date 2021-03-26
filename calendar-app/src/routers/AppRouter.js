import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
    return (
        <Router>
        <>
          <Switch>
              <Route 
                exact 
                path="/login" 
                component={LoginScreen}
                //isAuthenticated={user.logged}
              />
  
              <Route 
                exact
                path="/" 
                component={CalendarScreen}
                //isAuthenticated={user.logged}
              />

              <Redirect
                to="/"
              />
          </Switch>
        </>
      </Router>
    )
}
