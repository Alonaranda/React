import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import React from 'react';
import { shallow} from 'enzyme';
import { useFetch } from "../../../hooks/useFetch";
//import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch');


describe('Probando MultipleCustomHook', () => {


    test('Debe de mostrrase correctamente ', () => {
        useFetch.mockReturnValue({
            data: null,
            loding: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la informacion ', () => {
        useFetch.mockReturnValue({
            data: [{
                data: [{
                    author: 'Chris',
                    quote: 'Hola mundo'
                }],
                loding: false,
                error: null
            }],
            loding: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBe(false);
        //expect(wrapper.find('.mb-2').text().trim()).toBe('Hola mundo');
        //expect(wrapper.find('footer').text().trim()).toBe('Chris');
        //console.log(wrapper.html());
    });
});