import React  from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProductForm = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();

        const productData = {
            description: description,
            name: name,
            price: price
        }

        fetch('http://localhost:8000/products', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(productData)
        }).then(() => {
            history.push('/')
        })

        setDescription('');
        setName('');
        setPrice('');
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const priceChangeHandler = (e) => {
        setPrice(e.target.value);
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }

    return (
            <form className='product-form' onSubmit={submitHandler}>
                <label>Name</label>
                <br />
                <input
                    name='name'
                    type='text'
                    onChange={nameChangeHandler}
                    value={name}
                    required
                />
                <br />
                <label>Price</label>
                <br />
                <input
                    name='price'
                    type='integer'
                    onChange={priceChangeHandler}
                    value={price}
                    required
                />
                <br />
                <label>Description</label>
                <br />
                <input
                    name='description'
                    type='text'
                    onChange={descriptionChangeHandler}
                    value={description}
                    required
                />
                <br />
                <input
                    className='submitButton'
                    type='submit'
                    value='Add'
                />
            </form>
    )
}

export default ProductForm;