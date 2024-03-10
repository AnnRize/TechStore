import { observer } from "mobx-react-lite";
import style from "./Favorite.module.scss";
import { useStore } from "hooks";
import { ProductItem } from "components";

const Favorite = observer(() => {
   const {
      favoriteStore: { favorites },
   } = useStore();

   return (
      <div className={style.container}>
         <h2>Избранное</h2>
         {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
               <ProductItem key={index} product={favorite} type="favorite" />
            ))
         ) : (
            <div className={style.isEmpty}>
               <p>Пусто</p>
            </div>
         )}
      </div>
   );
});

export default Favorite;
