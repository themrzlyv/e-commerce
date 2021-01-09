import * as types from './types'

export const getCategories = () => async dispatch => {
    const res = await fetch(`http://localhost:3050/categories`)
    dispatch({
        type: types.GET_CATEGORYIES,
        payload: await res.json()
    })
}

export const currentCategory = (category) => dispatch => {
    dispatch({
        type: types.CURRENT_CATEGORY,
        payload: category
    })
}