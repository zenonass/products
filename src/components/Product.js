import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ name, id }) => {

    return (
            <Link className='link' to={`/products/${id}`}>
                <li className='menu-item'>{name}</li>
            </Link>
    )
}

export default Product;