import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas de 05-funciones.js', () => {
    //
    test('getUser -> {objeto}', () => {
        const resultado = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const getUserTest = getUser();
        expect(getUserTest).toEqual(resultado);

    });
    //
    test('getusuarioActivo -> {objeto} con argumento', () => {
        const nombre = 'Christian';
        const getusuarioActivoTests = getUsuarioActivo(nombre);
        const resultado = {
            uid: 'ABC567',
            username: nombre
        }
        expect(getusuarioActivoTests).toEqual(resultado);
    });
});