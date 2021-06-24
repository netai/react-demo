import './Product.css';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProductList from './product-list/ProductList';

const Product = () => {

    return (
        <div className="app-product">
            <Switch>
                <Redirect exact path="/product" to="/product/list" />
                <Route exact path="/product/list" component={ProductList} />
            </Switch>
        </div>
    );
}

export default Product;