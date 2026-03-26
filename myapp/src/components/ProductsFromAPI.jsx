import { useState, useEffect } from "react";
import ProductService from "../services/Product.service";
import ProductDetail from "./ProductDetail";

function ProductsFromAPI() {

    const [productslst, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));          
    }, []);

    return (
        <>
            <h1>Product List</h1>
            <table className="table table-striped" border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Product Code</th>
                        <th>View </th>
                    </tr>
                </thead>
                <tbody>
                    {productslst.map((prod, index) => (
                        <ProductDetail product={prod} key={index} />
                    ))}
                </tbody>
            </table>
        </>
    )
}


export default ProductsFromAPI;
