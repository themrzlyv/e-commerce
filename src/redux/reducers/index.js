import {combineReducers} from 'redux';
import { addToCartReducer } from './cartReducer';
import { categoryReducer, currentCategoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
export default combineReducers({
    categories: categoryReducer,
    currentCategory: currentCategoryReducer,
    products: productReducer,
    cartlist: addToCartReducer
})