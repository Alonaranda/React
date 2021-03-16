import React, {useState, useCallback, useEffect} from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../../style.css';

export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    /*
    const increment = () => {
        setCounter(counter + 1);
    }*/

    const increment = useCallback((num) => {
            setCounter(c => c + num);
        },[setCounter]);
    
    useEffect(() => {
        //Usar un callback en los efectos
    }, [increment]);




    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
