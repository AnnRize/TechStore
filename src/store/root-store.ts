import { Cart } from "./Cart.store";
import { Favorite } from "./Favorite.store";

export const RootStore = {
   cartStore: Cart(),
   favoriteStore: Favorite(),
};
