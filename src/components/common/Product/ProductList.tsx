import { ProductItem } from ".";
import { IProduct } from "types";
import style from "./ProductList.module.scss";

interface ProductListProps {
   data: IProduct[];
}

export const ProductList = ({ data }: ProductListProps) => {
   return (
      <div className={style.productList}>
         {data?.map((product) => (
            <ProductItem key={product.code} product={product} />
         ))}
      </div>
   );
};
