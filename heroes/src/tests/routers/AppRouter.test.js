import {mount} from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Probando AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('Mostrar loggin si no estoy authenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        //console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente de marvel, auth = true ', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Christian'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        console.log(wrapper.html());
        expect(wrapper.find('.navbar').exists()).toBe(true);
        
    });
});