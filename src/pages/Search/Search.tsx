import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { isUndefined } from "lodash";
import { ProductFilter, ProductList } from "components";
import { searchProducts } from "api";
import { Loader } from "interface";
import style from "./Search.module.scss";
import { CategoriesType, translateCategory } from "utils";

const Search = () => {
   const [searchParams /* setSearchParams */] = useSearchParams();
   const [categories, setCategories] = useState<CategoriesType[]>([]);
   const searchString = searchParams.get("q") || "";
   const filterPrice = searchParams.get("max_price") || "100000";

   const { data, isLoading, isError, refetch } = useQuery({
      queryKey: ["search", searchString],
      queryFn: async () => {
         const res = await searchProducts(filterPrice, searchString);
         // список найденных категорий
         const categoriesArray = Array.from(
            new Set(res.map((value) => value.category)),
         );
         setCategories(categoriesArray);
         return res;
      },
   });

   useEffect(() => {
      refetch();
   }, [searchString, filterPrice, refetch]);

   if (isLoading) {
      return <Loader />;
   }
   if (isError) {
      return <div>Не удаётся загрузить данные!!!</div>;
   }

   return (
      <div className={style.container}>
         {categories?.length > 0 && (
            <div className={style.foundCategories}>
               <p>Найденные категории:</p>
               <ul>
                  {categories?.map((category, index) => (
                     <li key={index}>{translateCategory(category)}</li>
                  ))}
               </ul>
            </div>
         )}

         <h2>Кол-во товаров: {data?.length}</h2>
         <div className={style.search}>
            <ProductFilter />
            <div className={style.searchList}>
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
export default Search;
