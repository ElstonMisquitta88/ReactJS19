import { useRef } from "react";


function UnControlledForm() {


    const productIdRef = useRef(0);
    const productNameRef = useRef();
    const productCodeRef = useRef();
    const productPriceRef = useRef(0);


    const onHandleSaveProduct = (e) => {

        let product = {
            id: productIdRef.current.value,
            productName: productNameRef.current.value,
            productCode: productCodeRef.current.value,
            prodductPrice: productPriceRef.current.value
        }

        e.preventDefault();

        // This can be passed to an API to be saved
        console.log(JSON.stringify(product));

        alert("Saved");

    }


    return (
        <>
            <h4>Add Product (Uncontrolled Form)</h4>
            <div className="row">
                <div className="col-lg-6">

                    <form onSubmit={(e) => onHandleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id : </label>
                            <input type="text" name="id" className="form-control" ref={productIdRef} />
                        </div>

                        <div className="form-group">
                            <label>Product Code : </label>
                            <input type="text" name="productCode" className="form-control" ref={productCodeRef} />
                        </div>

                        <div className="form-group">
                            <label>Product Name : </label>
                            <input type="text" name="productName" className="form-control" ref={productNameRef} />
                        </div>

                        <div className="form-group">
                            <label>Product Price : </label>
                            <input type="text" name="productPrice" className="form-control" ref={productPriceRef} />
                        </div>

                        <input type="submit" value="Save Product" className="btn btn-primary" />

                    </form>

                </div>
            </div>
        </>
    )
}

export default UnControlledForm