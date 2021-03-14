import React, { useEffect } from "react";
import "./main.css";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  //Manejar el estado de un formulario
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Cambio email");
  }, [email]);

  const handleSubmit = (e)=> {
      console.log('Enter!');
      e.preventDefault();
      console.log(formValues);
  }

  return (
    <>
        <h1>Form with custom hook</h1>
        <hr />

        <form >
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre: "
            value={name}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Tu email: "
            value={email}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Tu contraseña: "
            value={password}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
        </form>

      <button
      type="submit"
      className="btn btn-primary"
      onClick={handleSubmit}
      >
          Guardar
      </button>
    </>
  );
};
