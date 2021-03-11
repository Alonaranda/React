import heroes from '../data/heroes'

//Find
export const getHeroeByID = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id;
    });
}

//Filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
