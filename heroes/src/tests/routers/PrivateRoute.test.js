import {mount} from 'enzyme';
import React from 'react';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Probando PrivateRoute', () => {

    const props = {
        location: {
            pathname: '/dc'
        }
    };

    //LocalStorage
    Storage.prototype.setItem = jest.fn(); 

    test('Debe de mostrar el componente, si esta authenticado y localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
            );

            console.log(wrapper.html());
            expect(wrapper.find('span').exists()).toBe(true);
            expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/dc');
        });


    test('Debe de bloquear el componente si no esta authenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span></span>}
                    {...props}
                />
            </MemoryRouter>
            );
            expect(wrapper.find('span').exists()).toBe(false);
    });

});