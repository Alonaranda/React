import React, {useState} from 'react';
import PropTypes from 'prop-types'

//__Functional Component__
const CounterApp = ({value}) => {

    //Hook
    //const state = useState('Picoro');
    //console.log(state);
    const [counter, setCounter] = useState(value);

    //Funcion del Click +1
    const handleAdd = (e) => {
        setCounter(counter +1);
    }
    //Funcion Reset
    const reset = (e) => {
        setCounter(value);
    }

    //Funcion -1
    const restar = (e) => {
        setCounter(counter -1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>Valor de inicio: {value}</h2>
            <h4>{counter}</h4>

            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={restar}>-1</button>
        </>
    );
}
//PropTypes
CounterApp.propTypes = {
    value: PropTypes.number
}
//PropTypes Default
CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;

