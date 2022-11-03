import React from 'react';
import Product from './Product.js';

const Products = (props) => {

    return (
        <div className='products'>
            <h2>Products</h2>
            <ul className='no-bullets'>
                {
                    props.products.map(product =>
                        <Product
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            id={product.id}
                        />
                    )
                }
            </ul>
      </div>
    )
}

export default Products;