import axios from "axios";
import { IProduct } from "types";

const products = axios.create({ baseURL: "http://localhost:4200" });

export const getProduct = async (code: string, slug: string) => {
   const res = await products.get<IProduct[]>("products", {
      params: {
         code: code,
         slug: slug,
      },
   });
   return res.data[0];
};

export const getProducts = async (price: string | number, category: string) => {
   const { data } = await products.get<IProduct[]>("products", {
      params: {
         price_lte: price,
         category: category,
      },
   });
   return data;
};

export const searchProducts = async (
   price: string | number,
   searchString: string,
) => {
   const { data } = await products.get<IProduct[]>("products", {
      params: {
         price_lte: price,
         name_like: searchString,
      },
   });
   return data;
};
