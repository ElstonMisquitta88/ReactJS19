import { BrowserRouter, Routes, Route } from "react-router-dom";
import Databinding from "./Databinding";
import DiscountOffer from "./DiscountOffer";
import Search from "./Search";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/databinding" element={<Databinding />} />
        <Route path="/discountoffer" element={<DiscountOffer />} />
        <Route path="/product" element={<Search />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Layout;
