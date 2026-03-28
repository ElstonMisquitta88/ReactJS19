import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { lazy, Suspense } from "react";

const Databinding = lazy(() => import("./Databinding"));
const DiscountOffer = lazy(() => import("./Databinding"));
const Search = lazy(() => import("./Search"));
const ProductView = lazy(() => import("./ProductView"));
const NotFound = lazy(() => import("./NotFound"));
const UnControlledForm = lazy(() => import("./UnControlledForm"));
const ControlledForm = lazy(() => import("./ControlledForm"));
const FormikForm = lazy(() => import("./FormikForm"));
const ProductsFromAPI = lazy(() => import("./ProductsFromAPI"));
const Login = lazy(() => import("./login"));
const TodoList = lazy(() => import("./TodoList"));



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
            <Route path="/ProductsFromAPI" element={<ProductsFromAPI />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Layout;
