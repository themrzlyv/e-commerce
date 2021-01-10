import React from 'react'
import {useRouter} from 'next/router'
import {useState , useEffect} from 'react'
import { addToCart } from '../../redux/actions/cartAction'
import {useDispatch ,useSelector} from 'react-redux'
import { deleteProduct, updateProduct } from '../../redux/actions/productsAction'



const singleProduct = ({product}) => {

    const router = useRouter()

    const dispatch = useDispatch()

    const [isDisabled, setisDisabled] = useState(false)
    const [isShow, setisShow] = useState(false)

    // for inputs value usestate
    const [form, setform] = useState({id: product.id , productName: product.productName , quantityPerUnit: product.quantityPerUnit , unitPrice: product.unitPrice , unitsInStock: product.unitsInStock})


    const handlechange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        product.unitsInStock === 0 ? setisDisabled(true) : setisDisabled(false)
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProduct(form))
        router.push(`/`)
    }


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
                                <li className="nav-item d-flex">
                                    <button 
                                    onClick={() => setisShow(!isShow)}
                                    className='btn mx-1 btn-outline-warning'>
                                        Edit
                                    </button>
                                    <button 
                                    disabled={isDisabled} 
                                    className="nav-link btn btn-outline-success">
                                        <i 
                                        onClick={() => dispatch(addToCart(product))}
                                        className="fas fa-cart-plus"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                {product.productName}
                            </h5>
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
            {
                isShow ? 
                <div  className='row my-3'>
                    <div className="col-lg-10 mx-auto my-3">
                        <div className='card'>
                            <form onSubmit={handleSubmit}>
                                <div className="my-3 d-flex align-items-center">
                                    <h5 className="h5 mx-3 w-25">Product Name</h5>
                                    <input 
                                    onChange={handlechange}
                                    name='productName'
                                    value={form.productName} 
                                    type="text" 
                                    className="w-50 form-control"/>
                                </div>
                                <div className="my-3 d-flex align-items-center">
                                    <h5 className="h5 mx-3 w-25">Price</h5>
                                    <input 
                                    onChange={handlechange}
                                    name='unitPrice'
                                    value={form.unitPrice} 
                                    type="number" 
                                    className="w-50 form-control"/>
                                </div>
                                <div className="my-3 d-flex align-items-center">
                                    <h5 className="h5 mx-3 w-25">Quantity Per Unit</h5>
                                    <input 
                                    onChange={handlechange}
                                    name='quantityPerUnit'
                                    value={form.quantityPerUnit} 
                                    type="text" 
                                    className="w-50 form-control"/>
                                </div>
                                <div className="my-3 d-flex align-items-center">
                                    <h5 className="h5 mx-3 w-25">in Stock</h5>
                                    <input 
                                    onChange={handlechange}
                                    name='unitsInStock'
                                    value={form.unitsInStock} 
                                    type="number" 
                                    className="w-50 form-control"/>
                                </div>
                                <div className="my-3 d-flex align-items-center">
                                    <button className='btn btn-info mx-3'>Save</button>
                                    <button onClick={() => dispatch(deleteProduct(product.id))} className='btn btn-danger mx-3'>Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                :
                null
            }
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