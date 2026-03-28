import { useState, useEffect } from "react";
import ProductService from "../services/Product.service";
import ProductDetail from "./ProductDetail";

function ProductsFromAPI() {

    const [productslst, setProducts] = useState([]);
    const [message, setmessage] = useState("");

    useEffect(() => {
        ProductService.getAllProducts()
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);


    const deleteProduct = (id) => {
        ProductService.deleteProduct(id)
            .then(() => {
                setmessage("Deleted successfully");
               
                setProducts(prev =>
                    prev.filter(prod => prod.productId !== id)  // update UI AFTER API success
                );
            })
            .catch(err => console.error("Delete failed", err));
    };

    return (
        <>
            <h1>Product List</h1>
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
            <table className="table table-striped" border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Product Code</th>
                        <th>View </th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {productslst.map((prod, index) => (
                        <ProductDetail product={prod} key={index} onDelete={deleteProduct} />
                    ))}
                </tbody>
            </table>
        </>
    )
}


export default ProductsFromAPI;
