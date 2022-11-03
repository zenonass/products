import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isPending } = useFetch('http://localhost:8000/products/' + id)
    return (
        <>
            {isPending && <div>Loading...</div>}
            {product && <div className="product-details">
                <h2>Product details</h2>
                <br />
                <h3>
                    Name: {product.name}
                </h3>
                <br />
                <h3>
                    Price: {product.price}
                </h3>
                <br />
                <h3>
                    Description: {product.description}
                </h3>
                <br />
            </div>
        }
        </>
    )
}

export default ProductDetails;