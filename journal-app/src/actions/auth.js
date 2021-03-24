//Simples funciones
import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { startLoading, finishLoading } from "./ui";

//Funcion asincrona, cualquier funcion 
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        // setTimeout(() => {
        //     dispatch(login;(123, 'Pedro'));
        // }, 3000);
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
            dispatch(finishLoading());
        })
        .catch(({message}) => {
            console.log(message);
            dispatch(finishLoading())
        })
    }
}

//Si es funcion asincrona necesito regresar un callback
export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user}) => {
            await user.updateProfile({displayName: name});
            //console.log(user);
            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(({message}) => {
            console.log(message);
        })
        console.log('Registrado!');
    }
}

//Action de login con google
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}


//Manda lo que nos interesa el id y nombre
export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}
