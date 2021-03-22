import { HeroesApp } from "../HeroesApp";
import React from 'react';
import {shallow} from 'enzyme';

describe('Probando HeroesApp', () => {
    test('Se muestra bien', () => {
        const wrapper = shallow(<HeroesApp/>);
        expect(wrapper).toMatchSnapshot();

    });
});