import React from 'react';
import { mount } from 'enzyme';
import { HeroeScreen } from '../../../components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Probando HeroeScreen', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()

    }
    
    test('Debe de mostrar el componente redirect ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={history}/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar un heroe si el parametro existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk']}>
                <Route path="/heroe/:heroeId" component={HeroeScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('Debe regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
    
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk']}>
                <Route 
                    path="/heroe/:heroeId" 
                    component={() => <HeroeScreen history={history}/>}
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Debe regresar a la pantalla anterior con goBack', () => {
        const history = {
            length: 3,
            goBack: jest.fn(),
            push: jest.fn()
    
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-hulk']}>
                <Route 
                    path="/heroe/:heroeId" 
                    component={() => <HeroeScreen history={history}/>}
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(history.goBack).toHaveBeenCalledWith();
        expect(history.push).not.toHaveBeenCalled();
    });

    test('Debe de llamar el Redirect', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-huwdefek']}>
                <Route 
                    path="/heroe/:heroeId" 
                    component={() => <HeroeScreen history={history}/>}
                />
            </MemoryRouter>
        );
        console.log(wrapper.html());
        expect(wrapper.find('Redirect').exists()).toBe(false);
    });
});