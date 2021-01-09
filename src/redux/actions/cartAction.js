import * as types from './types'

export const addToCart = (product) => dispatch => {
    dispatch({
        type:types.ADDTO_CART,
        payload: product
    })
}

export const deleteToCart = (id) => dispatch => {
    dispatch({
        type: types.DELETE_CART,
        payload: id
    })
}