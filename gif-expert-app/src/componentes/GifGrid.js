import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';
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
      <h3 className="animate_animated animate_fadeIn">{category}</h3>
      {loading && <p className="animate_animated animate_flash">Loading...</p>}

      <div className="card-grid">
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
