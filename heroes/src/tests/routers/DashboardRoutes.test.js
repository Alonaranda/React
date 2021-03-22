import {mount} from 'enzyme';
import React from 'react';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Probando Dashboard Routes', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            name: 'Chris'
        }
    };

    test('should ', () => {
        const wrapper = mount(
            //MemoryRouter si hay Route
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Chris');
    });
});