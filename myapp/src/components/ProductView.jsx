import { useNavigate, useParams, useLocation } from "react-router-dom";
import { productList } from "../data/data";
import { use } from "react";

function ProductView() {

    // (A) Used to read route parameters from the URL. In this case, it will read the 'id' parameter from the URL.
    const { id } = useParams();

    // (B) useLocation is a hook that returns the current location object, which contains information about the current URL. This can be useful for reading query parameters or other parts of the URL.
    const loc = useLocation();
    const queryParams = new URLSearchParams(loc.search);
    const cityparam = queryParams.get("city");
    console.log("query params:", cityparam);



    const filtered = productList.filter(x => x.productid == id);


    const navigate = useNavigate();
    const redirectToProductView = () => {
        navigate(`/product`);
    }

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
            <div className="container mt-4">
                <span>
                  Value from query params:<b> {cityparam} </b>
                </span>
            </div>
            <br></br>
            <span><input type="button" className="btn btn-primary" value="Back" onClick={() => redirectToProductView()} /></span>
            <span></span>
            <span><input type="button" className="btn btn-danger" value="Back" onClick={() => navigate(-1)} /></span>

        </>
    )
}


export default ProductView;