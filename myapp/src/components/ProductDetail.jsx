function ProductDetail({ product }) {

    
    return (
        <>
            <tr key={product.productid}>
                <td>{product.productid}</td>
                <td>{product.productname}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>{product.productCode}</td>
            </tr>
        </>
    );

}


export default ProductDetail;