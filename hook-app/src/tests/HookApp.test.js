import {shallow} from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Probando HookApp', () => {
    test('SnapShot correcto', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    });
});