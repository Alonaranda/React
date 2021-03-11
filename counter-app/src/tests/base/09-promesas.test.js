import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en 09-promesas.js', () => {
    test('should ', () => {
        
    });
    /*
    test('getHeroeByIdAsync -> Heroe Async ', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    });

    test('getHeroeByIdAsync -> No existe heroe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    });*/
});