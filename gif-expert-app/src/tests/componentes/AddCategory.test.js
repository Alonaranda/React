import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from "../../componentes/AddCategory";
import {shallow} from 'enzyme';


describe('Probando AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    //Requiere la funcion SetCategories como prop
    test('Snapshot de <AddCategory/>', () => {
        expect(wrapper).toMatchSnapshot();
    });

    //Simular cambios en input
    test('Evaluar cambias en input', () => {
        const input = wrapper.find('input');
        const value = 'hola';
        
        input.simulate('change', {
            target: {value}
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });


    //Simular submit, reinicia test, no se llama funcion
    test('Prevent default', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(setCategories).not.toHaveBeenCalled();
    });

    //Se limpia el input
    test('Llamar setCategories y limpiarla ', () => {
        //console.log('limpiar');
        //Change
        const input = wrapper.find('input');
        const value = 'hola';
        input.simulate('change', {
            target: {value}
        });
        //Submit
        wrapper.find('form').simulate('submit', {
            preventDefault(){},
        });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');

    });
});