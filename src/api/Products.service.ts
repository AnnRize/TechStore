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

export const getProducts = async (
   minPrice: string | number,
   maxPrice: string | number,
   category: string,
) => {
   const { data } = await products.get<IProduct[]>("products", {
      params: {
         price_lte: maxPrice,
         price_gte: minPrice,
         category: category,
      },
   });
   return data;
};

export const searchProducts = async (
   minPrice: string | number,
   maxPrice: string | number,
   searchString: string,
) => {
   const { data } = await products.get<IProduct[]>("products", {
      params: {
         price_lte: maxPrice,
         price_gte: minPrice,
         name_like: searchString,
      },
   });
   return data;
};
