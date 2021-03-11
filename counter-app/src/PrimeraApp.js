//Un componente usa upperCamelCase
//Clases o functionalComponets FC 
//Clases ya no se usan, se usan funciones
import {Fragment} from 'react'
import React from 'react';
import PropTypes from 'prop-types'

/*
const PrimeraApp = ({saludo, despedida, subtitulo} ) => {
    const saludos = 'Hola Mundo String';
    const numero = 123.12;
    const arreglo = [1,2,3,4,5,6];
    const persona = {
        nombre: 'Chris',
        edad: 25
    };
    /*
    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </Fragment>
    );**
    return (
        <>
            <h1>Primer componente</h1>
            <p>{saludos}</p>
            <p>{numero}</p>
            <p>{arreglo}</p>
            <p>{JSON.stringify(persona, null, 3)}</p>
            <p>{saludo}</p>
            <p>{despedida}</p>
            <p>{subtitulo}</p>
        </>
    );
    
}*/

//Para mis pruebas
const PrimeraApp = ({saludo, subtitulo} ) => {    
    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
