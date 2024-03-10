import favoriteIcon from "../../../assets/favorite.svg";
import deleteIcon from "../../../assets/delete.svg";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { MyButton } from "interface";
import { formatter } from "utils";
import { useStore } from "hooks";
import { IProduct } from "types";
import style from "./ProductItem.module.scss";

interface ProductItemProps {
   product: IProduct;
   type?: "buy" | "cart" | "favorite";
}

export const ProductItem = observer(
   ({ product, type = "buy" }: ProductItemProps) => {
      const {
         cartStore: { addProduct, deleteProduct },
         favoriteStore: { addFavorite, deleteFavorite, isFavorite },
      } = useStore();
      return (
         <article className={style.product}>
            {/* <div className={style.image}> */}
            <div
               className={style.img}
               style={{ backgroundImage: `url(${product.pictureUrl})` }}
            />
            {/* <img src={product.pictureUrl} alt="" /> */}
            {/* </div> */}
            <div className={style.info_container}>
               <div className={style.info}>
                  <p className={style.name}>
                     <Link to={`/product/${product.code}/${product.slug}`}>
                        {product.name}
                     </Link>
                  </p>
                  <p className={style.price}>{formatter(product.price)}</p>
               </div>
               <div className={style.buttons}>
                  {(type === "buy" || type === "cart") && (
                     <MyButton
                        disabled={isFavorite(product)}
                        className={style.isFavorite}
                        onClick={() => addFavorite(product)}
                     >
                        <img src={favoriteIcon} width="40" alt="" />
                     </MyButton>
                  )}
                  {type === "buy" && (
                     <>
                        <MyButton
                           className={style.purchase}
                           onClick={() => addProduct(product)}
                        >
                           Купить
                        </MyButton>
                     </>
                  )}
                  {type === "cart" && (
                     <>
                        <MyButton
                           className={style.delete}
                           onClick={() => deleteProduct(product.id!)}
                        >
                           <img src={deleteIcon} width="40" alt="" />
                        </MyButton>
                     </>
                  )}
                  {type === "favorite" && (
                     <>
                        <MyButton
                           className={style.delete}
                           onClick={() => deleteFavorite(product.id!)}
                        >
                           <img src={deleteIcon} width="40" alt="" />
                        </MyButton>
                        <MyButton
                           className={style.purchase}
                           onClick={() => addProduct(product)}
                        >
                           Купить
                        </MyButton>
                     </>
                  )}
               </div>
            </div>
         </article>
      );
   },
);
