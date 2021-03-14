import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({defaultCategories=[]}) => {
    //const categories = ['Inuyasha', 'Naruto', 'Samurai X'];
    const [categories, setCategories] = useState(defaultCategories);
    /*
    const handleAdd = () => {
        //setCategories([...categories, 'DeathNote']);
        setCategories( cate => [...cate, 'DeathNote']);
    }*/

    //Para pasar datos en el <AddCategory/> agregamos que vamos a utilizar
    return (
        <>
            <h2>GifExpertApp</h2>
             
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    //<li key={category}>{category}</li>
                    ) //El key no debe ser el indice, casi siempre es el id de la BD
                }
            </ol>
        </>
    )
}

