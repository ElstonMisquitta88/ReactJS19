import { productList } from "../data/data";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

function ProductList({ selectedcat, searchTxt,searchPrc,srtName }) { // Use props to receive the selected category from Search component

    const selectedCategory = selectedcat;
    const TexttoSearch = searchTxt;
    const PricetoSearch = searchPrc;
    const SortName=srtName

    const products = productList
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Based on Drop Down Product selected
    useEffect(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter(x => x.categoryid == selectedCategory);
        }

        if (TexttoSearch) {
            filtered = filtered.filter(x =>
                x.productname.toLowerCase().includes(TexttoSearch.toLowerCase())
            );
        }

        if (PricetoSearch) {
            filtered = filtered.filter(x =>
                x.price >= parseInt(PricetoSearch.split("-")[0]) && x.price <= parseInt(PricetoSearch.split("-")[1])
            );
        }
        
        if (SortName === "A-Z") {
            filtered = [...filtered].sort((a, b) => a.productname.localeCompare(b.productname));
        } else if (SortName === "Z-A") {
            filtered = [...filtered].sort((a, b) => b.productname.localeCompare(a.productname));
        }

        setFilteredProducts(filtered);
    }, [selectedCategory,TexttoSearch,PricetoSearch,SortName])


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
                        <ProductDetail product={prod} key={prod.productid} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ProductList;
