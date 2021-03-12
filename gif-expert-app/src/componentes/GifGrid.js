import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  //Al ejecutar una funcion dentro de una api, se vuelve un ciclo infinito
  //UseEffect hace que no hagamos ciclo infinito
  //Ejecuta cierto codigo de manera condicional
  //El arreglo vacio, indica que solo se ejecuta una vez

  
    
  //const [images, setImages] = useState([]);
    //Usamos helpers
    const {data:images, loading} = useFetchGifs(category);
    //console.log(data, loading);

    /*
    useEffect(() => {
        getGifs(category)
            .then(imgs =>{
                setImages(imgs);
        })
    }, [category]);//Si la category cambia, se vuelve a ejecutar
    */
  

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid animate__fadeIn">
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
