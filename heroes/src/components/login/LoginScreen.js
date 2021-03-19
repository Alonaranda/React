import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () =>{
        //history.push('/');
        history.replace('/');//No deja historia de lo que hice antes, no puedo dar atras
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
