import favorite from "../../assets/favorite.svg";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Loader, MyButton } from "interface";
import { formatter } from "utils";
import { getProduct } from "api";
import { useStore } from "hooks";
import style from "./Product.module.scss";

const Product = observer(() => {
   const { code, productSlug } = useParams();
   const {
      cartStore: { addProduct },
      favoriteStore: { addFavorite, isFavorite },
   } = useStore();

   const { data, isLoading } = useQuery({
      queryKey: ["product", code],
      queryFn: () => getProduct(code!, productSlug!),
   });

   if (isLoading) {
      return <Loader />;
   }

   return (
      <div className={style.container}>
         <h2>{data?.name || ""}</h2>
         {data && (
            <div className={style.productContainer}>
               <div className={style.imageWrapper}>
                  <img src={data?.pictureUrl} alt="" />
               </div>
               <div className={style.product}>
                  <div className={style.model}>
                     <p>{data.characteristics.model}</p>
                  </div>
                  <div className={style.purchaseContainer}>
                     <p className={style.price}>{formatter(data?.price)}</p>
                     <div className={style.buttons}>
                        <MyButton
                           className={style.favorite}
                           disabled={isFavorite(data)}
                           onClick={() => addFavorite(data)}
                        >
                           <img src={favorite} width="30" alt="" />
                        </MyButton>
                        <MyButton
                           className={style.purchase}
                           onClick={() => addProduct(data)}
                        >
                           Купить
                        </MyButton>
                     </div>
                  </div>
                  <div className={style.description}>
                     <p>{data.description}</p>
                  </div>
                  <div className={style.characteristic}>
                     <p>Характеристики</p>
                     <ul>
                        <li>Тип - {data.characteristics.type}</li>
                        <li>Модель - {data.characteristics.model}</li>
                     </ul>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
});

export default Product;
