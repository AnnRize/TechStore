import { CategoryList } from "components";
import { periferiyaArray } from "utils";
import style from "./PeriferiyaIAksessuary.module.scss";

const PeriferiyaIAksessuary = () => {
   return (
      <div className={style.container}>
         <h2>Периферия и аксессуары</h2>
         <CategoryList categoryArray={periferiyaArray} />
      </div>
   );
};

export default PeriferiyaIAksessuary;
