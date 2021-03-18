import {useState} from 'react'


export const useCounter = (initialState = 0) => {

    //usamos el useState
    const [counter, setCounter] = useState(initialState);

    //Incrementar
    const increment = () => {
        setCounter(counter + 1);
    }

    //Decrementar
    const decrement = () =>{
        setCounter(counter - 1);
    } 

    //Reset
    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement, 
        reset
    };
}
