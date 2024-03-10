import { makeAutoObservable } from "mobx";
import toast from "react-hot-toast";
import { IProduct } from "types";

export const Favorite = () => {
   const currentFavorites: IProduct[] = JSON.parse(
      localStorage.getItem("favorites")!,
   );

   return makeAutoObservable(
      {
         favorites: currentFavorites || ([] as IProduct[]),
         id: currentFavorites ? currentFavorites.length + 1 : 1,
         addFavorite(product: IProduct) {
            this.favorites.push({ ...product, id: this.id });
            this.id++;
            toast.success("Товар добавлен в избранное!");
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
         },
         deleteFavorite(id: number) {
            this.favorites = [
               ...this.favorites.filter((item) => item.id !== id),
            ];
            this.id--;
            toast.success("Товар удален из избранного!");
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
            if (this.favorites.length === 0) {
               localStorage.removeItem("favorites");
            }
         },
         isFavorite(product: IProduct) {
            return this.favorites.some((item) => item.code === product.code);
         },
      },
      {},
      { autoBind: true },
   );
};
