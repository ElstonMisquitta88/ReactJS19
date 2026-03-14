import { NavLink } from "react-router-dom";

function NavBar() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                    <div className="navbar-nav">
                    
                    <NavLink to="/databinding" className="nav-link active" aria-current="page">Data Binding</NavLink>
                    <NavLink to="/discountoffer" className="nav-link">Discount Offer</NavLink>
                    <NavLink to="/product" className="nav-link">Search Product</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}
export default NavBar;