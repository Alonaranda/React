import {mount} from 'enzyme';
import React from 'react';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import '@testing-library/jest-dom' 

describe('Probando Navbar', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Christian'
        }
    }

    //Prueba del history
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
        );
    
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Christian');
    });

    test('Debe de llamar logout y history', () => {
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });


});