import { currentCategory, getCategories } from '../../redux/actions/categoryAction'
import { useEffect } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { getProducts } from '../../redux/actions/productsAction'




const Categories = () => {

    const dispatch = useDispatch()

    const {categories} = useSelector(state=>state)

    useEffect(() => {
        dispatch(getCategories())
    } , [])

    return (
        <div className='container my-4 '>
            <div className="row">
                <div className="col-lg-12 my-2">
                    <h4 className="h4">Category</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 my-2">
                    <ul className="list-group">
                        {
                            categories ? categories.map(category => 
                                    <li 
                                    key={category.id} 
                                    onClick={() => {
                                        dispatch(getProducts(category.id))
                                        dispatch(currentCategory(category))
                                    } } 
                                    className="list-group-item">
                                        {category.categoryName}
                                    </li>
                            )
                            :
                            ''
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Categories;