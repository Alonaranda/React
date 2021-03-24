import { types } from "../types/types";


/* COMO FUNCIONARA EL STATE 
    {
        uid: cefvdvdv,
        name: 'Christian
    }
 */

export const authReducer = (state = {}, action) => {
    switch(action.type){
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return{}
            
        default:
            return state;
    }
}