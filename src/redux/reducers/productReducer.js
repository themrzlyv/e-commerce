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