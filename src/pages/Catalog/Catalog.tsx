import { CategoryList } from "components";
import { catalogArray } from "utils";
import style from "./Catalog.module.scss";

export const Catalog = () => {
   return (
      <div className={style.container}>
         <h2>Каталог</h2>
         <CategoryList categoryArray={catalogArray} />
      </div>
   );
};
export default Catalog;
