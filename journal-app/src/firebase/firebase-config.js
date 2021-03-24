import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBgrF5vqq5fNX7haMPfqum4Ro2fSsBLNA0",
    authDomain: "react-journal-app-5cd8b.firebaseapp.com",
    projectId: "react-journal-app-5cd8b",
    storageBucket: "react-journal-app-5cd8b.appspot.com",
    messagingSenderId: "565481088440",
    appId: "1:565481088440:web:64535374943e37d4f3db4d"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Mi base de datos - referencia
const db = firebase.firestore();

//Authenticacion
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}