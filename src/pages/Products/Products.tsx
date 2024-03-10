import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { isUndefined } from "lodash";
import { useEffect } from "react";
import { ProductFilter, ProductList } from "components";
import { Loader } from "interface";
import { getProducts } from "api";
import style from "./Products.module.scss";
import { CategoriesType, translateCategory } from "utils";

const Products = () => {
   const [searchParams /* setSearchParams */] = useSearchParams();
   const filterPrice = searchParams.get("max_price") || "100000";

   const { productList } = useParams();

   const { data, isLoading, isError, refetch } = useQuery({
      queryKey: ["product-list", productList],
      queryFn: () => getProducts(filterPrice, productList!),
   });

   useEffect(() => {
      refetch();
   }, [filterPrice, refetch]);

   if (isLoading) {
      return <Loader />;
   }
   if (isError) {
      return <div>Не удаётся загрузить данные!!!</div>;
   }

   return (
      <div className={style.container}>
         <h2>{translateCategory(productList as CategoriesType)}</h2>
         <div className={style.products}>
            <ProductFilter />
            <div className={style.productList}>
               {!isUndefined(data) && data.length > 0 ? (
                  <ProductList data={data} />
               ) : (
                  <div className={style.notFound}>Ничего не найдено</div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Products;
