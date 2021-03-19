import React, {useMemo} from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    //const heroes = getHeroesByPublisher(publisher);



    return (
        <div className="card-columns animate__fadeInDownBig">
            {
                heroes.map(hero => (
                    <HeroeCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
