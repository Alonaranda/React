import PrimeraApp from "../PrimeraApp";
import React from 'react';
//import {render} from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

/*
describe('Pruebas en PrimeraAPP', () => {
    test('Demostrar Hola soy Goku ', () => {
        const saludo = 'Hola soy Goku';
        //Wrapper = Producto renderizado de mi componente React
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    });
});*/



import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


describe('Pruebas en PrimeraAPP', () => {
    test('Debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });
    //Subtitulo
    test('Debe de mostrar subtitulo, enviado por props', () => {
        const subtitulo = 'Soy un subtitulo';
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo} 
        />
        );
        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    });
});