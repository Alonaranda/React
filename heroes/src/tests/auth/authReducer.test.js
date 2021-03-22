import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Probando authReducer', () => {
    test('Debe de retornar el estado por defecto ', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });

    test('Debe pasar el nombre, autentificar', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Christian'
            }
        };
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'Christian'
        });


    });

    test('Debe de borrar el name del user y logged en false', () => {
        const action = {
            type: types.logout,
            payload: {}
        };
        const state = authReducer({logged: false, name: 'Chris'}, action);
        expect(state).toEqual({
            logged: false,
        });
    });
});