import React, {useReducer, useEffect} from 'react';
import { toDoReducer } from './toDoReducer';
import {useForm} from '../hooks/useForm'
import './style.css';
import { ToDoList } from './ToDoList';


//Funcion init
const init = () => {
    /*
    return [{
        id: new Date().getTime(),
        descripcion: 'Aprender React',
        done: false
    }];*/
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const ToDoApp = () => {

    //Usamos useReducer
    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    //Hooks de forms para extraer los datos
    const [{descripcion}, handleInputChange, reset] = useForm({
        descripcion: '',
    })

    //useEffect para guardar en localStorage cada que toDos cambia
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos));
    }, [toDos]);


    //Click en agregar
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Agregar');
        if(descripcion.trim().length <= 1){
            return;
        }
        const newToDo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false
        };
        const action = {
            type: 'add',
            payload: newToDo
        }
        dispatch(action);
        reset();
    }

    //Click en eliminar
    const handleDelete = (id) => {
        //console.log(id);
        const action = {
            type: 'delete',
            payload: id
        }
        dispatch(action);
    }

    const handleToggle = (id) => {
        //console.log('Toogle');
        const action = {
            type: 'toggle',
            payload: id
        }
        dispatch(action);
    }


    return (
        <div>
            <h1>ToDoApp ({toDos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                <ToDoList 
                    toDos={toDos} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle}
                />
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            className="form-control"
                            value={descripcion}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-1"
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
