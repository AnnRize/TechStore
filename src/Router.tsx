/* eslint-disable mobx/missing-observer */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "layout";

const Home = lazy(() => import("pages/Home/Home"));
const CatalogLayout = lazy(() => import("layout/CatalogLayout/CatalogLayout"));
const Catalog = lazy(() => import("pages/Catalog/Catalog"));
const Search = lazy(() => import("pages/Search/Search"));
const Favorite = lazy(() => import("pages/Favorite/Favorite"));
const Cart = lazy(() => import("pages/Cart/Cart"));
const OsnovnyeKomplektuyushhieDlyaPk = lazy(
   () =>
      import(
         "pages/Categories/osnovnye-komplektuyushhie-dlya-pk/OsnovnyeKomplektuyushhieDlyaPk"
      ),
);
const PeriferiyaIAksessuary = lazy(
   () =>
      import("pages/Categories/periferiya-i-aksessuary/PeriferiyaIAksessuary"),
);
const Products = lazy(() => import("pages/Products/Products"));
const Product = lazy(() => import("pages/Product/Product"));

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />

            <Route element={<Layout />} path="/">
               <Route index element={<Home />} />
               <Route path="/search" element={<Search />} />
               <Route path="/favorite" element={<Favorite />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/catalog/*" element={<CatalogLayout />}>
                  <Route index element={<Catalog />} />
                  <Route
                     path="periferiya-i-aksessuary"
                     element={<PeriferiyaIAksessuary />}
                  />
                  <Route
                     path="osnovnye-komplektuyushhie-dlya-pk"
                     element={<OsnovnyeKomplektuyushhieDlyaPk />}
                  />
                  <Route path=":productList" element={<Products />} />
               </Route>
               <Route
                  path="/product/:code/:productSlug"
                  element={<Product />}
               />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
