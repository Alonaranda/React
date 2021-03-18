import {renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Probando useCounter', () => {
    test('Debe de retornar valores por defecto ', () => {
        const {result} = renderHook(() => useCounter());
        //console.log(result.current);
        expect(result.current.counter).toBe(0);
        expect( typeof result.current.decrement).toBe('function');
        expect( typeof result.current.increment).toBe('function');
        expect( typeof result.current.reset).toBe('function');
    });

    test('Debe de retornar valores que proporciono ', () => {
        const {result} = renderHook(() => useCounter(100));
        //console.log(result.current);
        expect(result.current.counter).toBe(100);
    });

    test('Debe incrementar el counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;
        act(() => {
            increment();
        });
        const {counter} = result.current;
        expect(counter).toBe(101);

    });

    test('Debe decrementar el counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;
        act(() => {
            decrement();
        });
        const {counter} = result.current;
        expect(counter).toBe(99);

    });

    test('Debe resetear el counter', () => {
        const {result} = renderHook(() => useCounter());
        const {increment} = result.current;
        const {reset} = result.current;
        act(() => {
            increment();
            reset();
        });
        const {counter} = result.current;
        expect(counter).toBe(0);

    });
});