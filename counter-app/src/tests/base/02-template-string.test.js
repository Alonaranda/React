//Completar jest
import '@testing-library/jest-dom';
//Importamos la funcion a probar
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas 02 template-string', () => {
    test('getSaludo() -> Hola + nombre', () => {
        const nombre = 'Christian';
        const saludo = getSaludo(nombre);
        //console.log(saludo);
        expect(saludo).toBe('Hola ' + nombre);
    });

    //getSaludo debe retornar Hola Carlos, si no hay argumento

    test('getSaludo() -> Sin argumento Hola Carlos', () => {
            const resultado = 'Hola Carlos';
            const saludo = getSaludo();
            expect(saludo).toBe(resultado);
            //console.log(saludo);
    });
});