import React, {useState} from 'react';
import {useCounter} from '../hooks/useCounter';
import { Small } from './Small';
import '../../style.css';

export const Memorize = () => {

    const {counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);


    return (
        <div>
            <h1>Counter: <Small value={counter}></Small> </h1>
            <hr/>
            <button className="btn btn-primary" onClick={increment}
            >Incrementar</button>

            <button 
                className="btn btn-secondary"
                onClick={() => {
                    setShow(!show);
                }}
            
            >Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}
