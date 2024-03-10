import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { formatter, priceArray } from "utils";
import style from "./ProductFilter.module.scss";

export const ProductFilter = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [price, hidePrice] = useState(false);

   return (
      <aside className={style.filter}>
         <p>Фильтры</p>
         <div className={style.price}>
            <div
               className={style.filterName}
               onClick={() => hidePrice((e) => !e)}
            >
               <p>Цена</p>
            </div>
            <div className={`${style.priceContainer} ${price && style.hide}`}>
               <label className={style.price_label} htmlFor="default">
                  <input
                     checked={searchParams.get("max_price") === null}
                     type="radio"
                     name="rad"
                     id="default"
                     onChange={() => {
                        setSearchParams((params) => {
                           params.delete("max_price");
                           return params;
                        });
                     }}
                  />
                  <span>Все</span>
               </label>
               {priceArray.map((price, index) => (
                  <label
                     key={index}
                     className={style.price_label}
                     htmlFor={`${index}`}
                  >
                     <input
                        checked={
                           searchParams.get("max_price") === price.toString()
                        }
                        type="radio"
                        name="rad"
                        id={`${index}`}
                        onChange={() => {
                           setSearchParams((params) => {
                              params.set("max_price", `${price}`);
                              return params;
                           });
                        }}
                     />
                     <span>Менее {formatter(price)}</span>
                  </label>
               ))}
            </div>
         </div>
      </aside>
   );
};
