import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    //No lo encuentra
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher: ${publisher} no es correcto`);
    }
    //Lo encuentra
    return heroes.filter(hero => hero.publisher === publisher);
}