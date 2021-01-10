import * as types from '../actions/types'
import initialState from './initialState'

export const productReducer = (state=initialState.products,action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return action.payload
        default:
            return state;
    }
}

export const updateProduct = (state=initialState.updateproduct,action) => {
    switch (action.type) {
        case types.UPDATE_PRODUCT:
            return action.payload
    
        default:
            return state;
    }
}
export const deleteProduct = (state=initialState.deleteproduct,action) => {
    switch (action.type) {
        case types.DELETE_PRODUCT:
            return action.payload
    
        default:
            return state;
    }
}