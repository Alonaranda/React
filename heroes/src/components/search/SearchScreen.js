import React, {useMemo} from 'react';
import queryString from 'query-string';

import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    //console.log(location.search);
    const {q = ''} = queryString.parse(location.search);



    const initialForm = {
        textoInput: q,
    }
    const [formValues, handleInputChange] = useForm(initialForm);
    const {textoInput} = formValues;



    const heroesFiltered =  useMemo(() => getHeroesByName(q), [q])
    //const heroesFiltered = getHeroesByName(textoInput);



    const handleSearch = (e) =>{
        e.preventDefault();
        //console.log(formValues);
        history.push(`?q=${textoInput}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row animate__backInUp">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Encuentra tu heroe"
                            className="form-control"
                            autoComplete="off"
                            name="textoInput"
                            value={textoInput}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={handleSearch}
                        >Buscar...</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados:</h4>
                    <hr/>

                    {(q ==='') && 
                    <div className="alert alert-info">
                        Search!
                    </div>}

                    {(q !=='' && heroesFiltered.length === 0) && 
                    <div className="alert alert-danger">
                        No hay existente!
                    </div>}

                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
