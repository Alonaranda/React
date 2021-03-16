import React, {useLayoutEffect, useRef, useState}  from "react";
import "../../style.css";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const {data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  console.log(author, quote);

  //Necesito mantener la referencia
  const pTag = useRef();

  //Ponemos un estado de nuestros valores
  const [boxSize, setBoxSize] = useState({});

  //Podemos hacer mediciones despues de que hizo una renderizacion 
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-2">{quote}</p>
      </blockquote>
      <pre>
          {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};
