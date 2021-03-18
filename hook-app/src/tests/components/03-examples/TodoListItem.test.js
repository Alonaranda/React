import {shallow} from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import {demotoDo } from '../../fixtures/demotoDo';

describe('Probando ToDoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            toDo={demotoDo[0]}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}

    />);

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la función borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demotoDo[0].id)
    });

    test('Debe de llamar la funcioon toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demotoDo[0].id)
    });
    test('Debe mostrar p correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1.- ${demotoDo[0].descripcion}`)
    });

    test('Debe tener la clase complete', () => {
        
        const toDo = demotoDo[0];
        toDo.done = true;
        const wrapper = shallow(
            <TodoListItem
                toDo={demotoDo[0]}
        />);
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
});