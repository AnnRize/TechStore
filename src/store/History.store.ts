/* import { makeAutoObservable } from "mobx";
import { IProduct } from "types";

export const History = () => {
   const currentHistory: IProduct[] = JSON.parse(
      localStorage.getItem("history")!,
   );

   return makeAutoObservable(
      {
         history: currentHistory || ([] as IProduct[]),
         updateHistory(product: IProduct) {
            if (this.history.some((item) => item.code === product.code)) {
               this.history = [
                  ...this.history.filter((item) => item.code !== product.code),
               ];
               this.history.push(product);
            } else if (this.history.length === 4) {
               this.history.shift();
               this.history.push(product);
            } else {
               this.history.push(product);
            }
            localStorage.setItem("history", JSON.stringify(this.history));
         },
         get reverseHistory(): IProduct[] {
            return this.history.slice().reverse();
         },
      },
      {},
      { autoBind: true },
   );
};
 */