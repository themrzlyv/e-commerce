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

export const updateProduct = (product) => async dispatch => {
    const res = await fetch(`http://localhost:3050/products/${product.id}` , {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(product)
    })
    dispatch({
        type: types.UPDATE_PRODUCT,
        payload: await res.json()
    })
}


export const deleteProduct = (id) => async dispatch => {
    const res = await fetch(`http://localhost:3050/products/${id}` , {
        method: "DELETE",
    })
    dispatch({
        type: types.UPDATE_PRODUCT,
        payload: await res.json()
    })
}