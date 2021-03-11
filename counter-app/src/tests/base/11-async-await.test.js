import { getImagen } from "../../base/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen() -> url de la imagen ', async() => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
    });
});