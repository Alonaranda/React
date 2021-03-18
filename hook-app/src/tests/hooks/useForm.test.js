import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Probando useForm', () => {
    const initialForm = {
        name: 'Chris',
        email: 'a@a.com'
    }

    test('Formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm)); 
        const [formValues, handleInputChange, reset] = result.current;
        console.log(formValues);
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (Cambiar nombre) ', () => {
        const {result} = renderHook(() => useForm(initialForm)); 
        const [, handleInputChange] = result.current;
        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melisa'
                }
            })
        });
        const [formValues] = result.current;
        //console.log(formValues);
        expect(formValues.name).toBe('Melisa');
        expect(formValues).toEqual({...initialForm, name: 'Melisa'});
    });

    test('De de re-establecer el formulario con reset', () => {
        const {result} = renderHook(() => useForm(initialForm)); 
        const [, handleInputChange, reset] = result.current;
        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melisa'
                }
            });
            reset();
        });
        const [formValues] = result.current;
        //console.log(formValues);
        expect(formValues).toEqual(initialForm);




    });

});