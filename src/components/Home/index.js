import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar';
import {loadProducts} from '../../redux/actions/loadProducts';
import {selectProduct} from '../../redux/actions/selectProduct';
import {DATA} from '../../constant/data';
import Products from '../Products/index';

const Home = ({products, loadProducts}) => {

    useEffect(() => {
        if (!products || products.length === 0) {
            loadProducts(DATA);
            console.log(DATA); 
        }     
    });

    return (
        <div className="App">
            <div className="container">
            <NavBar/>
            <Products products={products}/>
            </div>           
        </div>
    )
}

export const mapStateToProps = ({ products }) => {
    return {
        products: products,
    }
}

export default connect(mapStateToProps , { loadProducts, selectProduct })(Home);