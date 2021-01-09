import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { deleteToCart } from '../../redux/actions/cartAction'

const Navi = () => {

    const dispatch = useDispatch()

    const {cartlist} = useSelector(state=>state)

    

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mx-3" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-cart-arrow-down mx-2"></i>
                                    Shop Cart
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        cartlist.length > 0 ? cartlist.map(item => 
                                            <li 
                                            className='d-flex align-items-center' 
                                            key={item.id}>
                                                <i 
                                                onClick={()=> dispatch(deleteToCart(item.id))}
                                                className="fas text-danger fa-minus">
                                                </i>
                                                <a className='dropdown-item'>{item.productName}</a>
                                            </li>
                                        )
                                        :
                                        <li>
                                            <a className='dropdown-item'>Shop Cart is Empty</a>
                                        </li>
                                    }
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navi;