import { getHeroeByID, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
    test('should ', () => {
        
    });
    /*
    test('getHeroeById -> heroe por id', () => {
        const id = 2;
        const getHeroeByIdTest = getHeroeByID(id);
        const heroeData = heroes.find((h) => {
            return h.id === id;
        });
        expect(getHeroeByIdTest).toEqual(heroeData);
    });

    test('getHeroeById -> undefined ', () => { 
        const id = 100;
        const heroe = getHeroeByID(id);
        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner -> heroe por id', () => {
        const owner = 'DC'
        const getHeroesByOwnerTest = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(getHeroesByOwnerTest).toEqual(heroeData);
    });

    test('getHeroesByOwner -> undefined ', () => {
        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner);
        expect(heroe).toBe(2);
    });*/
});