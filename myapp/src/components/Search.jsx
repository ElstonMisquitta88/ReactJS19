import { categoryList } from "../data/data";
import ProductList from "./ProductList";
import {  useState } from "react";

function Search() {

    const categories = categoryList;
    const[selectedCategory, setselectedCategory] = useState("");


    const handleCategoryChange = (e) => {
        setselectedCategory(prev => e.target.value);
    }

    return (
        <>
            <h4>Search Products by Category</h4>
            <select onChange={(e)=>handleCategoryChange(e)}> 
                <option value="">-Select a Category-</option>
                {categories.map((category, index) => (
                    <option key={category.id} value={category.id}>{category.categoryName}</option>
                ))}
            </select>
            <i>{selectedCategory}</i>
            <hr/>
            <ProductList/>

        </>
    )
}
export default Search;