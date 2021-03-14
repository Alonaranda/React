import {shallow} from 'enzyme';
import React from 'react'
import {GifGridItem} from '../../componentes/GifGridItem';

describe('Probando GifGridItem', () => {
    const title = 'titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe mostra <GifGridItem/>', () => {
        //const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un p -> con el texto', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Imagen debe tener imagen == url y props', () => {
        const img = wrapper.find('img');
        //console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title)
    });

    test('Debe tener la clase Css', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        //console.log(div.hasClass());
        expect(className.includes('animate__animated')).toBe(true);
    });
});

