import React, { useMemo } from 'react';
import {useParams, Redirect} from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();
    
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
    //const hero = getHeroesById(heroeId);
    //console.log(hero);

    if(!hero){
        return <Redirect to="/"/>
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () =>{
        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    return (
        <div className="row mt-5 animate__fadeInTopLeft">
            <div className="col-4">
                <img 
                    className="img-thumbnail animate__fadeInDownBig" 
                        alt={superhero} 
                        src={`../assets/heroes/${heroeId}.jpg`}
                    />
            </div>
            <div className="col-8">
                <h3 className="text-success">{superhero}</h3>
                <ul className="list-group list-group-flush"> 
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
                </ul>
                <h5 className="mt-3"> Character:</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info mt-2"
                    onClick={handleReturn}
                >Return</button>
            </div>
        </div>
    )
}
