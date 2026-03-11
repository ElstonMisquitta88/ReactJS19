import { categoryList } from "../data/data";
import ProductList from "./ProductList";
import { useState } from "react";

function Search() {

    const categories = categoryList;
    const [selectedCategory, setselectedCategory] = useState("");


    const handleCategoryChange = (e) => {
        setselectedCategory(prev => e.target.value);
    }

    return (
        <>

            <div className="row">
                <div className="col-lg-6">
                    <h4>Search Products </h4>
                    <label>Filter : </label>
                    <select className="form-select" onChange={(e) => handleCategoryChange(e)}>
                        <option value="">-Select a Category-</option>
                        {categories.map((category, index) => (
                            <option key={category.id} value={category.id}>{category.categoryName}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            <i>{selectedCategory}</i>
            
            <hr />
            <div className="row">
                <div className="col-lg-12 sm-6">
                    <ProductList selectedcat={selectedCategory} />
                </div>
            </div>



        </>
    )
}
export default Search;