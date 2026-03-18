import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../data/data";

function ProductView() {

    // Used to read route parameters from the URL. In this case, it will read the 'id' parameter from the URL.
    const { id } = useParams();
    let filtered = productList.filter(x => x.productid == id);

    return (
        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title mb-0">Product Details for ID: {id}</h4>
                    </div>
                    <div className="card-body">
                        {filtered.map((product, index) => (
                            <div key={product.productid} className="mb-3">
                                <div className="row">
                                    <div className="col-sm-4"><strong>Product Name:</strong></div>
                                    <div className="col-sm-8">{product.productname}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4"><strong>Price:</strong></div>
                                    <div className="col-sm-8">{product.price}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4"><strong>Product Code:</strong></div>
                                    <div className="col-sm-8">{product.productCode}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductView;