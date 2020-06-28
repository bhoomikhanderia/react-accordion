import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar';
import {loadProducts} from '../../redux/actions/loadProducts';
import {selectProduct} from '../../redux/actions/selectProduct';
import {DATA} from '../../constant/data';
import Products from '../Products';
import Panel from '../Panel';

const Home = ({products, loadProducts, selectedProduct}) => {

    useEffect(() => {
        if (!products || products.length === 0) {
            loadProducts(DATA);
            console.log(DATA); 
        }     
    });

    return (
        <div>
            <div className="App">
                <div className="container">
                <NavBar/>
                <Products products={products}/>
                </div>           
            </div>
            <Panel selectedProduct={selectedProduct}/>
        </div>
    )
}

export const mapStateToProps = ({ products, selectedProduct}) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { loadProducts, selectProduct })(Home);