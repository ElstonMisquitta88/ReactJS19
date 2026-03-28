import { useNavigate } from "react-router-dom";
import ProductService from "../services/Product.service";
import { useState } from "react";


function ProductDetail({ product,onDelete }) {


    const navigate = useNavigate();
    const redirectToProductView = (id) => {
        navigate(`/product-view/${id}`);
    }

  
  

    return (
        <>
            <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>{product.productCode}</td>
                <td>
                    <input type="button" className="btn btn-info" value="View"
                        onClick={(e) => redirectToProductView(product.productId)}
                    /></td>
                <td>
                    <input type="button" className="btn btn-danger" value="Delete"
                        onClick={(e) => onDelete(product.productId)}
                    />
                </td>
            </tr>
        </>
    );

}


export default ProductDetail;