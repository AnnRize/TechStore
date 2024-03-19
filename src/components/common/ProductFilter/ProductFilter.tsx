import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { formatter, priceArray } from "utils";
import style from "./ProductFilter.module.scss";

export const ProductFilter = () => {
   const [, setSearchParams] = useSearchParams();
   const [price, hidePrice] = useState(true);

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
                     defaultChecked
                     type="radio"
                     name="rad"
                     id="default"
                     onChange={() => {
                        setSearchParams((params) => {
                           params.delete("gte");
                           params.delete("lte");
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
                        type="radio"
                        name="rad"
                        id={`${index}`}
                        onChange={() => {
                           setSearchParams((params) => {
                              params.set("gte", `${price.min}`);
                              params.set("lte", `${price.max}`);
                              return params;
                           });
                        }}
                     />
                     <span>{price.min + " - " + formatter(price.max)}</span>
                  </label>
               ))}
            </div>
         </div>
      </aside>
   );
};
