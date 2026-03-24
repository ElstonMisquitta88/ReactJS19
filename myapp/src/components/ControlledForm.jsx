import { useState } from "react";
import { categoryList } from "../data/data";
import { validateProductForm } from "../utilities/product-validation";


function ControlledForm() {

    const product = {
        productid: 0,
        productCode: "",
        productName: "",
        productPrice: "",
        productcategory: ""
    }


    const [productFormData, setproductFormData] = useState(product);
    const [errors, setErrors] = useState({});

    const handlechange = (e) => {
        setproductFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validateProductForm(e.target.name, e.target.value));
    }


    const onHandleSaveProduct = (e) => {
        e.preventDefault();


        if (Object.keys(errors).length > 0) {
                console.log("Cannot Save"); // Can Push this data to API
        }
        else {
            console.log(JSON.stringify(productFormData)); // Can Push this data to API
        }


    }

    return (
        <>
            <h4>Add Product (Controlled Form)</h4>
            <div className="row">
                <div className="col-lg-6">

                    <form onSubmit={(e) => onHandleSaveProduct(e)}>

                        <div className="form-group">
                            <label>Product Id : </label>
                            <input type="text" name="productid" className="form-control" onChange={(e) => handlechange(e)} />
                        </div>

                        <div className="form-group">
                            <label>Product Code : </label>
                            <input type="text" name="productCode" className="form-control" onChange={(e) => handlechange(e)} />
                        </div>

                        <div className="form-group">
                            <label>Product Name : </label>
                            <input type="text" name="productName" className="form-control" onChange={(e) => handlechange(e)} />
                            {errors && errors.hasOwnProperty('title')
                                && (<span className="text-danger">{errors.title}</span>)}
                        </div>

                        <div className="form-group">
                            <label>Product Price : </label>
                            <input type="text" name="productPrice" className="form-control" onChange={(e) => handlechange(e)} />
                        </div>

                        <div className="form-group">
                            <label>Category : </label>
                            <select className="form-select" name="productcategory" onChange={(e) => handlechange(e)}>
                                <option value=""> -Select a Category- </option>
                                {categoryList.map((category, index) => (
                                    <option key={category.id} value={category.id}>{category.categoryName}</option>
                                ))}
                            </select>
                        </div>

                        <br />
                        <input type="submit" value="Save Product" className="btn btn-primary" />

                    </form>

                </div>
            </div>
        </>
    )
}


export default ControlledForm;