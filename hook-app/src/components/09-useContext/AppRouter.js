import React from 'react';
//Importaciones para usar el Router
import { NavBar } from './NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <NavBar/>

                {/* Switch de los Routers*/}
                <Switch>
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="*" component={HomeScreen}/>
                    {/*Se puede usar el Redirect */}
                </Switch>
            </div>
        </Router>
    )
}
