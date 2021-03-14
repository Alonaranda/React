import React, {useEffect, useState} from 'react';
import './main.css'
import { Message } from './Message';

export const SimpleForm = () => {
    //Manejar el estado de un formulario
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email} = formState;

    useEffect(()=>{
        //console.log('hey');
    }, []);
    useEffect(()=>{
        //console.log('formState cambió');
    }, [formState]);
    useEffect(()=>{
        //console.log('email cambió');
    }, [email]);

    const handleInputChange = ({target}) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    } 
    
    return (
        <>
            <h1>Hook useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre: "
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu email: "
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message/>}

        </>
    )
}
