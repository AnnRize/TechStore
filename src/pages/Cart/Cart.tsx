import { observer } from "mobx-react-lite";
import { ProductItem } from "components";
import { formatter } from "utils";
import { useStore } from "hooks";
import style from "./Cart.module.scss";

const Cart = observer(() => {
   const {
      cartStore: { products, Sum },
   } = useStore();

   return (
      <div className={style.container}>
         <h2>Корзина</h2>
         {products.length > 0 ? (
            products.map((product, index) => (
               <ProductItem key={index} product={product} type="cart" />
            ))
         ) : (
            <div className={style.isEmpty}>
               <p>Пусто</p>
            </div>
         )}
         <div className={style.sum}>
            <p>Итого: {formatter(Sum)}</p>
         </div>
      </div>
   );
});

export default Cart;
