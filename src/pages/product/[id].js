import React from 'react'
import {useState , useEffect} from 'react'
import { addToCart } from '../../redux/actions/cartAction'
import {useDispatch ,useSelector} from 'react-redux'



const singleProduct = ({product}) => {

    const dispatch = useDispatch()

    const [isDisabled, setisDisabled] = useState(false)

    useEffect(() => {
        product.unitsInStock === 0 ? setisDisabled(true) : setisDisabled(false)
    }, [])


    return (
        <div className='container'>
            <div className="row my-3">
                <div className="col-lg-10 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-pills justify-content-between card-header-pills">
                                <li className="nav-item">
                                    <button className="btn btn-outline-info nav-link">
                                        <i className="fas mx-2 fa-store"></i>
                                        {product.unitsInStock}
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button disabled={isDisabled} className="nav-link btn btn-outline-success">
                                        <i 
                                        onClick={() => dispatch(addToCart(product))}
                                        className="fas fa-cart-plus"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">
                                Price:
                                <i className="fas mx-1 fa-euro-sign"></i>
                                {product.unitPrice}
                            </p>
                            <button className="btn btn-warning">
                                <i className="fas mx-1 fa-box-open"></i>
                                {product.quantityPerUnit}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({query:{id}}) => {
    const res = await fetch(`http://localhost:3050/products/${id}`)
    const product = await res.json()
    return {
        props: {
            product
        }
    }
}

export default singleProduct;