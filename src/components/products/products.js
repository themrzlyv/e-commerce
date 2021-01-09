import { getProducts } from '../../redux/actions/productsAction'
import { useEffect } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import Link from 'next/link'
import { addToCart } from '../../redux/actions/cartAction'

const Products = () => {

    const dispatch = useDispatch()

    const {products} = useSelector(state=>state)
    const {currentCategory} = useSelector(state=>state)

    useEffect(() => {
        dispatch(getProducts())
    } , [])



    return (
        <div className='container  my-4 '>
            <div className="row">
                <div className="col-lg-6 my-2 d-flex align-items-center">
                    <h4 className="h4">Products</h4>
                    <span className="badge bg-success mx-2">{currentCategory.categoryName}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity Per Unit</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products ? products.map(product => 
                                    <Link key={product.id} href={`/product/${product.id}`}>
                                        <tr>
                                            <td>{product.productName}</td>
                                            <td>{product.quantityPerUnit}</td>
                                            <td>{product.unitPrice}</td>
                                            <td>{product.unitsInStock}</td>
                                            <td 
                                            onClick={() => dispatch(addToCart(product))}>
                                                <i className="fas text-success fa-cart-plus"></i>
                                            </td>
                                        </tr>
                                    </Link>
                                )
                                :
                                ''
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Products;