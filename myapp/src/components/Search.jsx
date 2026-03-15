import { categoryList } from "../data/data";
import ProductList from "./ProductList";
import { useState } from "react";

function Search() {

    const categories = categoryList;
    const [selectedCategory, setselectedCategory] = useState("");
    const [searchText, setsearchText] = useState("");
    const [searchPrice, setsearchPrice] = useState("");
    const [sortName, setsortName] = useState("");

    const handleCategoryChange = (e) => {
        setselectedCategory(prev => e.target.value);
    }


    const handleTextChange = (e) => {
        console.log("handleTextChange  " + e.target.value);
        setsearchText(prev => e.target.value);
    }

    const handlePriceChange = (e) => {
        console.log("handlePriceChange  " + e.target.value);
        setsearchPrice(prev => e.target.value);
    }


     const handlleSortName = (e) => {
        console.log("handlleSortName  " + e.target.value);
        setsortName(prev => e.target.value);
    }

    const handleResetFilters = () => {
        setselectedCategory("");
        setsearchText("");
        setsearchPrice("");
        setsortName("");
    }


    return (
        <>
            <h4>Search Products </h4>
            <div className="row">
                <div className="col-lg-6">
                    <label><b>Filter : </b></label>
                    <select className="form-select" value={selectedCategory} onChange={(e) => handleCategoryChange(e)}>
                        <option value="">-Select a Category-</option>
                        {categories.map((category, index) => (
                            <option key={category.id} value={category.id}>{category.categoryName}</option>
                        ))}
                    </select>
                </div>
            </div>

            <br /><br />
            <label><b>Search By Text : </b></label>
            <div className="row">
                <div className="col-lg-3">
                    <input type="text" className="form-control" value={searchText} onChange={(e) => handleTextChange(e)} placeholder="Search by product name" />
                </div>
            </div>


            <br /><br />


            <div className="row">
                <div className="col-lg-6">
                    <label><b>Filter Price : </b></label>
                    <select className="form-select" value={searchPrice} onChange={(e) => handlePriceChange(e)}>
                        <option value="">Select a Price Range</option>
                        <option value="0-500">Below 500</option>
                        <option value="500-1000">500 - 1000</option>
                        <option value="1000-2000">1000 - 2000</option>
                        <option value="2000-10000">2000+</option>
                    </select>
                </div>
            </div>


            <br /><br />


            <div className="row">
                <div className="col-lg-6">
                    <label><b>Sort By Name : </b></label>
                    <select className="form-select" value={sortName} onChange={(e) => handlleSortName(e)}>
                        <option value="">Select Sort Order</option>
                        <option value="A-Z">A-Z</option>
                       <option value="Z-A">Z-A</option>
                    </select>
                </div>
            </div>

            <br /><br />
            <hr />

            <button className="btn btn-warning" onClick={() => handleResetFilters()}>Reset Filters</button>

            <br /><br />
            <hr />

            <div className="row">
                <div className="col-lg-12 sm-6">
                    <ProductList selectedcat={selectedCategory} searchTxt={searchText} searchPrc={searchPrice} srtName={sortName} />
                </div>
            </div>



        </>
    )
}
export default Search;