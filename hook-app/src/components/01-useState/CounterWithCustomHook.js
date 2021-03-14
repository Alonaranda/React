import React from 'react';
import './counter.css'
//Importamos el hooks que acabamos de hacer
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const {state:counter, increment, decrement, reset} = useCounter(0);

    return (
        <>
            <h1>CounterWithCustomHook: {counter}</h1>
            <hr/>

            <button 
                 className="btn btn-primary"
                 onClick={increment}
            >
                +1
            </button>
            <button 
                 className="btn btn-primary"
                 onClick={reset}
            >
                Reset
            </button>
            <button 
                className="btn btn-secondary"
                onClick={() => decrement(2)}
                >
                -1
            </button>
        </>
    )
}
