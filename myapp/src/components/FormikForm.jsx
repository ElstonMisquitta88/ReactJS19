import { ErrorMessage, Field, Form, Formik } from 'formik';
import { categoryList } from '../data/data';
import * as Yup from "yup";

function FormikForm() {

    const initialProductForm = {
        productid: 0,
        productCode: "",
        productName: "",
        productPrice: "",
        productcategory: ""
    }

    const categories = categoryList;


    const onHandleSaveProduct = (frm) => {
        alert("Product Saved : " + JSON.stringify(frm)); // Can Push this data to API   
    }

    // Note : We can also use Yup for Validation instead of writing our own validation function
    /*     const validateFn = (frm) => {
        let errors = {};
        if (!frm.productCode) {
            errors.productCode = "Product Code Required";
        }
        return errors;
    } */



    const productValidationSchema = Yup.object({
        productCode: Yup.string().required("Product Code Required"),
        productName: Yup.string().required("Product Name Required"),
        productPrice: Yup.number()
            .required("Product Price Required")
            .positive("Price must be positive")
            .integer("Price must be an integer")
            .min(1, "Enter Amount Greater than 1")
            .max(1000, 'Enter Amount Less than 1000'),
        productcategory: Yup.string()
            .required("Product Category Required")
            .notOneOf(["0"], "Product Category Required")
    })

    return (
        <>
            <h4>Add Product (Formik)</h4>
            <div className="row">
                <div className="col-lg-6">

                    <Formik initialValues={initialProductForm}
                        enableReinitialize={true}
                        validationSchema={productValidationSchema}
                        onSubmit={(frm) => onHandleSaveProduct(frm)}>
                        <Form>

                            <div className="form-group">
                                <label>Product Id</label>
                                <Field name="productid" className="form-control"></Field>
                            </div>

                            <div className="form-group">
                                <label>Product Code</label>
                                <Field name="productCode" className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="productCode"></ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Product Name</label>
                                <Field name="productName" as="textarea" className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="productName"></ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <Field name="productPrice" className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="productPrice"></ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Product Category</label>
                                <Field as="select" name="productcategory" className="form-select">
                                    <option value="0">--Select Category--</option>
                                    {categories.map((category, index) => {
                                        return <option key={category.id} value={category.id}>{category.categoryName}</option>;
                                    })}
                                </Field>
                                <ErrorMessage className="text-danger" component="label" name="productcategory"></ErrorMessage>
                            </div>

                            <br />
                            <input type="submit" value="Save Product" className="btn btn-primary" />

                        </Form>
                    </Formik>


                </div>
            </div>
        </>
    )
}

export default FormikForm;