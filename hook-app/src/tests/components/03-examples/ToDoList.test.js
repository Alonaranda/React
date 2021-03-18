import {shallow} from 'enzyme';
import React from 'react';
import {demotoDo } from '../../fixtures/demotoDo';
import { ToDoList } from '../../../components/08-useReducer/ToDoList';

describe('Probando toDoList', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrapper = shallow(
    <ToDoList
        toDos={demotoDo}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);


    test('Mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener dos elementos', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demotoDo.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
});