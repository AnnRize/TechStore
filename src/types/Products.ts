import { CategoriesType } from "utils";

export interface IProduct {
   code: number;
   name: string;
   slug: string;
   description: string;
   pictureUrl: string;
   price: number;
   category: CategoriesType;
   characteristics: {
      type: string;
      model: string;
   };
   id?: number;
}
