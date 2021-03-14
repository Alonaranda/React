import {useState} from 'react'


export const useCounter = (initialState = 10) => {

    //usamos el useState
    const [state, setstate] = useState(initialState);

    //Incrementar
    const increment = () => {
        setstate(state + 1);
    }

    //Decrementar
    const decrement = (factor = 1) =>{
        setstate(state - factor);
    } 

    //Reset
    const reset = () => {
        setstate(initialState);
    }

    return {
        state,
        increment,
        decrement, 
        reset
    };
}
