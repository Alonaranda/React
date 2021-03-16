import React, {useState, useMemo} from 'react';
import {useCounter} from '../hooks/useCounter';
import '../../style.css';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHooks = () => {

    const {counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    //Memoriza cada que counter cambia
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
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
