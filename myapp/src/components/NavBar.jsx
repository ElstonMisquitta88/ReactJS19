import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";




function NavBar() {


   const { currentUser } = useContext(UserContext);

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    Welcome, <b>{currentUser?.userName || "Guest"}</b>

                    <div className="navbar-nav">
                        <NavLink to="/discountoffer" className="nav-link">Discount Offer</NavLink>
                        <NavLink to="/product" className="nav-link">Search Product</NavLink>
                        <NavLink to="/FormikForm" className="nav-link">Formik Form</NavLink>
                        <NavLink to="/ProductsFromAPI" className="nav-link">Products From API</NavLink>
                        <NavLink to="/Login" className="nav-link">Login for Todo Page</NavLink>
                        <NavLink to="/TodoList" className="nav-link">Todo List</NavLink>
                        <NavLink to="/add-todo" className="nav-link">Add / Edit TODO</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}
export default NavBar;