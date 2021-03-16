import React, {useContext} from 'react';
import { UserContext } from './UserContext';


export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);
    
    const newUser = {
        id: 1234,
        name: 'chris',
    }
    const enviar = () => {
        setUser(newUser);
    }

    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button 
            className="btn btn-primary" 
            onClick={enviar}>
                Login
            </button>
        </div>
    )
}
