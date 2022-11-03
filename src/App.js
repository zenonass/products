import React from 'react';
import Products from './components/Products.js';
import useFetch from './useFetch.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductForm from './components/ProductForm.js';
import Navbar from './components/Navbar.js';
import ProductDetails from './components/ProductDetails.js';
import NotFound from './components/NotFound.js';


function App() {
    const {data: products, isPending} = useFetch('http://localhost:8000/products');

    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    {isPending && <div>Loading...</div>}
                    {products && <Products products={products} />}
                </Route>
                <Route exact path="/create">
                    <ProductForm/>
                </Route>
                <Route exact path="/products/:id">
                    <ProductDetails/>
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;