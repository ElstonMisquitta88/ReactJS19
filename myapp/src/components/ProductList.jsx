import { productList } from "../data/data";
import { useState, useEffect  } from "react";
import ProductDetail from "./ProductDetail";

function ProductList({selectedcat}) { // Use props to receive the selected category from Search component

    const selectedCategory = selectedcat;
    

    const products = productList
    const [filteredProducts, setFilteredProducts] = useState(products);
   

    useEffect(() => {
        setFilteredProducts(
            selectedCategory ? products.filter(x => x.categoryid == selectedCategory) : products
        );
    }, [selectedCategory])

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

                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((prod, index) => (
                      <ProductDetail product={prod} key={prod.productid} cat={selectedCategory} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ProductList;
