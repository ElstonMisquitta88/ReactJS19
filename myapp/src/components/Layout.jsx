import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";


// import Databinding from "./Databinding";
// import DiscountOffer from "./DiscountOffer";
// import Search from "./Search";
// import NotFound from "./NotFound";
// import ProductView from "./ProductView";

import { lazy, Suspense } from "react";

const Databinding = lazy(() => import("./Databinding"));
const DiscountOffer = lazy(() => import("./Databinding"));
const Search = lazy(() => import("./Search"));
const ProductView = lazy(() => import("./ProductView"));
const NotFound = lazy(() => import("./NotFound"));
const UnControlledForm = lazy(() => import("./UnControlledForm"));
const ControlledForm = lazy(() => import("./ControlledForm"));
const FormikForm = lazy(() => import("./FormikForm"));

function Layout() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/databinding" element={<Databinding />} />
            <Route path="/discountoffer" element={<DiscountOffer />} />
            <Route path="/product" element={<Search />} />
            <Route path="/product-view/:id" element={<ProductView />} />
            <Route path="/UnControlledForm" element={<UnControlledForm />} />
            <Route path="/ControlledForm" element={<ControlledForm />} />
            <Route path="/FormikForm" element={<FormikForm />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Layout;
