import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Probando LoginScreen', () => {

    const history = {
        replace: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Christian'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    );

    //console.log(wrapper.html());

    test('Debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', () => {
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Christian'
            }
        });
        expect(history.replace).toHaveBeenCalled();
    });

    test('Probando localStorage', () => {
        const handleLogin = wrapper.find('button').prop('onClick');
        handleLogin();
        localStorage.setItem('lastpath', '/dc');
        handleLogin();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });


});