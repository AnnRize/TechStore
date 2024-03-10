import { makeAutoObservable } from "mobx";
import toast from "react-hot-toast";
import { IProduct } from "types";

export const Cart = () => {
   const currentProducts: IProduct[] = JSON.parse(
      localStorage.getItem("basket")!,
   );

   return makeAutoObservable(
      {
         products: currentProducts || ([] as IProduct[]),
         id: currentProducts ? currentProducts.length + 1 : 1,
         addProduct(product: IProduct) {
            this.products.push({ ...product, id: this.id });
            this.id++;
            toast.success("Товар добавлен в корзину!");
            localStorage.setItem("basket", JSON.stringify(this.products));
         },
         deleteProduct(id: number) {
            this.products = [...this.products.filter((item) => item.id !== id)];
            this.id--;
            toast.success("Товар удален из корзины!");
            localStorage.setItem("basket", JSON.stringify(this.products));
            if (this.products.length === 0) {
               localStorage.removeItem("basket");
            }
         },
         get Sum(): number {
            return this.products.reduce(
               (prev: number, value: IProduct) => (prev += value.price),
               0,
            );
         },
      },
      {},
      { autoBind: true },
   );
};
