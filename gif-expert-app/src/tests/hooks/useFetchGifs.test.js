import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Probando Hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Inuyasha'));
        const {data, loading} = result.current;
        //console.log(data, loading);
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imgs y loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Inuyasha'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});