import { getGifs } from "../../helpers/getGifs";

describe('Probando Helper getGifs Fetch', () => {
    test('Debe traer a 10 elementos', async() => {
        const gifs = await getGifs('Inuyasha');
        expect(gifs.length).toBe(10);
    });
    test('No tiene category', async() => {
        const gifs = await getGifs('');
        //console.log(gifs);
        expect(gifs.length).toBe(0);
    });
});