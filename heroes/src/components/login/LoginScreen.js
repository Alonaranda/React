import React,{useContext} from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () =>{

        const lastpath = localStorage.getItem('lastpath') || '/';
        //history.push('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Christian'
            }
        });
        history.replace(lastpath);//No deja historia de lo que hice antes, no puedo dar atras
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            
            >Login</button>
        </div>
    )
}
