import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';
import React from 'react';

describe('Pruebas en CounterApp', () => {
    //Obtener todo el wrapper para las pruebas
    let wrapper = shallow(<CounterApp/>);

    //Inicializar antes de cada prueba
    beforeEach(()=>{
        //console.log('Empieza prueba reiniciada...');
        wrapper = shallow(<CounterApp/>);
    });

    test('Mostrar <CounterApp/> correctamente', () => {
        //const wrapper = shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Mostrar valor por defecto de 100', () => {
        const value = 100;
        const respuesta = `Valor de inicio: ${value}`;
        const wrapper = shallow(
            <CounterApp value={value}/>
        )
        const valorIniciar = wrapper.find('h2').text();
        //console.log(valorIniciar);
        expect(valorIniciar).toBe(respuesta);
    });
    //Click
    test('Debe incrementar con el boton +1', () => {
        //const wrapper = shallow(<CounterApp/>);
        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');
        const counter = wrapper.find('h4').text();
        expect(counter).toBe('1');
    });

    test('Debe decrementar con el boton -1', () => {
        //const wrapper = shallow(<CounterApp/>);
        const btn3 = wrapper.find('button').at(2);
        btn3.simulate('click');
        const counter = wrapper.find('h4').text();
        expect(counter).toBe('-1');
    });

    test('Debe resetear al valor inicial', () => {
        const wrapper = shallow(<CounterApp value={105}/>) ;   
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counter = wrapper.find('h4').text();

        expect(counter).toBe('105');

    });
});

