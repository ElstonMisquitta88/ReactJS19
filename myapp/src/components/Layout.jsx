import { BrowserRouter, Routes, Route } from "react-router-dom";
import Databinding from "./Databinding";
import DiscountOffer from "./DiscountOffer";
import Search from "./Search";
import NavBar from "./NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/databinding" element={<Databinding />} />
          <Route path="/discountoffer" element={<DiscountOffer />} />
          <Route path="/product" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Layout;
