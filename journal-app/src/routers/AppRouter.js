import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {firebase} from '../firebase/firebase-config';
import {useDispatch} from 'react-redux';
import { login } from '../actions/auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  //Rutas privadas:
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    //Un observable es un tipo de objeto que se puede disparar más de una vez
    useEffect(() => {
      //Identifica si hay cambio en el authenticacion
      firebase.auth().onAuthStateChanged(async(user) => {
        //console.log(user);
        if( user?.uid ){
          dispatch(login(user.uid, user.displayName));
          setIsLoggedIn(true);

          dispatch(startLoadingNotes(user.uid));

        }else{
          setIsLoggedIn(false);
        }
        setChecking(false);
      });

    }, [dispatch,setChecking, setIsLoggedIn])

    //Si esta authenticado tiene uid
    if(checking){
      return (
        <h1>Cargando...</h1>
      )
    }

    return (
        <Router>
        <div>
          <Switch>
            <PublicRoute
                path="/auth"
                component={AuthRouter}
                isAuthenticated={isLoggedIn}
            />
            <PrivateRoute
                exact
                path="/"
                component={JournalScreen}
                isAuthenticated={isLoggedIn}
            />

            <Redirect to="/auth/login"/>

          </Switch>
        </div>
      </Router>
    )
}
