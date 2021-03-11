describe('Pruebas en archivo demo.test.js', () => {
    test('stringIguales', ()=> {
        //1.- Se inicializa
        const mensaje = 'Hola mundo';
        //2.-Estimulo
        const mensaje2 = 'Hola mundo';
        //3.- Se observa
        expect(mensaje).toBe(mensaje2);
    })
})
