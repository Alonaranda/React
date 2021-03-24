import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
//import validator from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";


export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  //Obtener valores de mi form
  const [formValues, handleInputChange] = useForm({
    name: 'Christian',
    email: 'admin@admin.com',
    password: '123456',
    password2: '123456'
  });
  const {name, email, password, password2} = formValues;

  //Submit
  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValid()){
      //console.log('Form correcto');
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }

    
  }

  const isFormValid = () => {
      if(name.trim().length === 0){
        //console.log('Name is required');
        dispatch(setError('Name is required'));
        return false;
      }else if(email.trim().length === 0){
        //console.log('Email not valid');
        dispatch(setError('Email not valid'));
        return false;
      }else if(password !== password2 || password.length < 5){
        //console.log('Mejora tu password');
        dispatch(setError('Revisa tu contraseña > 5'));
        return false;
      }

      dispatch(removeError());
      return true;
  }



  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>

      {
        msgError &&
        (
        <div className="auth__alert-error">
          {msgError}
        </div>
        )
      }

        <input 
              type="text" 
              placeholder="Name" 
              name="name"
              className="auth__input"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            name="password2"
            className="auth__input"
            autoComplete="off"
            value={password2}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn btn-primary btn-block mb-5">
            Register
          </button>

          <Link to="/auth/login" className="link">
            Already registered?
          </Link>
      </form>
    </>
  );
};
