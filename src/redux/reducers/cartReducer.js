import * as types from '../actions/types'
import initialState from './initialState'

export const addToCartReducer = (state=initialState.cartlist,action) => {
    switch (action.type) {
        case types.ADDTO_CART:
            const addedproduct = state.find(p=>p.id===action.payload.id)
            if(addedproduct){
                const newState = state.filter(p=>p.id===addedproduct.id)
            }
            else {
                return [...state,{...action.payload}]
            }
        case types.DELETE_CART:
            const newState = state.filter(p=>p.id!==action.payload)
            return newState;

        default:
            return state;
    }
}