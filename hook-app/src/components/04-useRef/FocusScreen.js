import React, {useRef} from 'react';
import '../../style.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    //console.log(ref);

    const handleClick = () => {
        //document.querySelector('input').focus();
        inputRef.current.focus();
        console.log(inputRef);
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
            ref={inputRef}
            className="form-control"
            placeholder="Su nombre:"
            
            >
            </input>

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
