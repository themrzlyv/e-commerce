import Categories from '../components/categories/categories'
import Products from '../components/products/products'


const Home = () => {
    return (
        <div className='container border border-dark'>
            <div className="row">
                <div className="col-lg-4">
                  <Categories />
                </div>
                <div className="col-lg-8">
                  <Products />
                </div>
            </div>
        </div>
    )
}

export default Home;