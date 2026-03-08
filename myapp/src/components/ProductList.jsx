import { productList } from "../data/data";

function ProductList() {

    const products = productList

    return (
        <>
            <h1>Product List</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Product Code</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.productid}>
                            <td>{product.productid}</td>
                            <td>{product.productname}</td>
                            <td>₹{product.price.toLocaleString()}</td>
                            <td>{product.productCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ProductList;
