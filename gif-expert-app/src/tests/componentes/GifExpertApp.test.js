import React from 'react'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../../componentes/GifExpertApp';


describe('Probando <GifExpertApp/>', () => {
    test('Snapshot', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['Inuyasha', 'Naruto'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});