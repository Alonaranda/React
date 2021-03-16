
const initialState = [{
    id: 1,
    toDo: 'Comprar pan',
    done: false
}];

const toDoReducer = (state = initialState, action) => {
    //Dentro de aqui tengo que hacer algo para modificar el state
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;
}

let toDos = toDoReducer();

//No usar push en React, solo en useRef
const newToDo = {
    id: 2,
    toDo: 'Comprar leche',
    done: false
}
const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo
}

toDos = toDoReducer(toDos, agregarToDoAction);











console.log(toDos);