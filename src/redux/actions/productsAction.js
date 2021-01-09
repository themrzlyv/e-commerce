import * as types from './types'

export const getProducts = (categoryId) => async dispatch => {
    let url = 'http://localhost:3050/products'
    if(categoryId){
        url = url + '?categoryId=' + categoryId
    }
    const res = await fetch(url)
    dispatch({
        type: types.GET_PRODUCTS,
        payload: await res.json()
    })
}