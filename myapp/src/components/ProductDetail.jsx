import { useNavigate  } from "react-router-dom";




function ProductDetail({ product }) {


    const navigate =useNavigate();
 
    const redirectToProductView=(id)=>{
      navigate(`/product-view/${id}`);
    }

    return (
        <>
            <tr key={product.productid}>
                <td>{product.productid}</td>
                <td>{product.productname}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>{product.productCode}</td>
                <td><input type="button" className="btn btn-info" value="View"
                    onClick={(e) => redirectToProductView(product.productid)}
                /></td>
            </tr>
        </>
    );

}


export default ProductDetail;