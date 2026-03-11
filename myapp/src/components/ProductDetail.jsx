function ProductDetail({ product, cat }) {

    
    return (
        <>
            <tr key={product.productid}>
                <td>{product.productid}</td>
                <td>{product.productname} + {cat}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>{product.productCode}</td>
            </tr>
        </>
    );

}


export default ProductDetail;