import { ErrorMessage, Field, Form, Formik } from 'formik';
import { categoryList } from '../data/data';
import * as Yup from "yup";
import ProductService from '../services/Product.service';

function FormikForm() {

    const initialProductForm = {
        ProductId: 0,
        ProductCode: "",
        ProductName: "",
        Price: "",
        Category: ""
    }

    const categories = categoryList;


    const onHandleSaveProduct = (frm) => {

        ProductService.addProduct(frm)
            .then(response => {
                alert("Product Saved Successfully!");
            })
            .catch(error => {
                alert("Error saving product!");
            });
    }


    const productValidationSchema = Yup.object({
        ProductCode: Yup.string().required("Product Code Required"),
        ProductName: Yup.string().required("Product Name Required"),
        Price: Yup.number()
            .required("Product Price Required")
            .positive("Price must be positive")
            .integer("Price must be an integer")
            .min(1, "Enter Amount Greater than 1")
            .max(1000, 'Enter Amount Less than 1000'),
        Category: Yup.string()
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
                                <Field name="ProductId" className="form-control"></Field>
                            </div>

                            <div className="form-group">
                                <label>Product Code</label>
                                <Field name="ProductCode" className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="ProductCode"></ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Product Name</label>
                                <Field name="ProductName" as="textarea" className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="ProductName"></ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <Field name="Price" className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="Price"></ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Product Category</label>
                                <Field as="select" name="Category" className="form-select">
                                    <option value="0">--Select Category--</option>
                                    {categories.map((category, index) => {
                                        return <option key={category.id} value={category.id}>{category.categoryName}</option>;
                                    })}
                                </Field>
                                <ErrorMessage className="text-danger" component="label" name="Category"></ErrorMessage>
                            </div>

                            <br />
                            <button type="submit" className="btn btn-primary">
                                Save Product
                            </button>

                        </Form>
                    </Formik>


                </div>
            </div>
        </>
    )
}

export default FormikForm;