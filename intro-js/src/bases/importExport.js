//Documentacion find: 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//Atajo con imp para import
import {heroes} from '../data/heroes'
import cualquierCosa from '../data/gatos' //Con export default

//console.log(heroes);
console.log(cualquierCosa);

//Find
export const getHeroeByID = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id;
    });
}
//console.log(getHeroeByID(2));

//Filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
//console.log(getHeroesByOwner('DC'));