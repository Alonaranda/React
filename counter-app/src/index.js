import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';


//const saludo = <h1>Hola Mundo</h1>;
//onst divRoot = document.querySelector('#root');
//ReactDOM.render(saludo, divRoot);
//ReactDOM.render( <PrimeraApp saludo = 'Hola soy Goku' despedida = "Adios" /> , divRoot);

//Para pruebas
//const divRoot = document.querySelector('#root');
//ReactDOM.render( <PrimeraApp saludo = 'Hola soy Goku'/> , divRoot);





//Empezamos con CounterApp
const divRoot = document.querySelector('#root');
ReactDOM.render( <CounterApp value={0}/> , divRoot)






