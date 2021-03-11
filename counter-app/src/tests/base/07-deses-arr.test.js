import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo() ->  [arreglo]', () => {
        
        const retornaArregloTests = retornaArreglo();
        //console.log(retornaArregloTests);
        const [letras, numero] = retornaArreglo();
        const resultado = ['ABC', 123];
        expect(retornaArregloTests).toEqual(resultado);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numero).toBe(123)
        expect(typeof numero).toBe('number');


    });
});