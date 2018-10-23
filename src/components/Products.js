"use strict";
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import ProductItem from "./ProductItem";
import NavProducts from "./NavProducts";

import './products.css';
import './mediaQuery.css';

class Products extends React.Component {
    constructor() {
        super();

        this.dispachAddToCart = this.dispachAddToCart.bind(this);
    }

    dispachAddToCart(product) {
        this.props.addToCart(product);
    }

    ProductsList() {
        return (
            this.props.products.map(product => {
                return (
                    <div className='pItems' key={product.id}>
                        <ProductItem handleOnAdd={this.dispachAddToCart} product={product} img={product.img}/>
                    </div>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <div>
                    <NavProducts />
                </div>
                <div id='pContainer'>
                    {this.ProductsList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapActionsToProps = dispatch => ({
    addToCart: bindActionCreators(addToCart, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(Products);