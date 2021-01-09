import * as types from '../actions/types'
import initialState from './initialState'

export const categoryReducer = (state=initialState.categories,action) => {
    switch (action.type) {
        case types.GET_CATEGORYIES:
            return action.payload
        default:
            return state;
    }
}
export const currentCategoryReducer = (state=initialState.currentCategory,action) => {
    switch (action.type) {
        case types.CURRENT_CATEGORY:
            return action.payload
        default:
            return state;
    }
}

