import React from 'react'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { wrap } from 'module';
jest.mock('../../hooks/useFetchGifs');

describe('Probando GifGrid', () => {
    const category = 'Inuyasha';

    //Hacer un snapshot
    test('Hacer un snapshot ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    });

    //UseFetch ya me regresa lka informacion 
    //Debe de mostrar items cuando se cargan imagenes
    //Un mock es fingir algo
    test('Debe de mostrar items cuando carga useFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cosa.jpg',
            title: 'Titulo'
        },
        {
            id: 'ASD',
            url: 'https://localhost/cosa.jpg',
            title: 'Titulo'
        },
    ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });

});