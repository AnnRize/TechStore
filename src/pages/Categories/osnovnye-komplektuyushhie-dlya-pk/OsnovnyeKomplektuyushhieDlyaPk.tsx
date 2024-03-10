import { osnovnyeKomplektuyushhieArray } from "utils";
import { CategoryList } from "components";
import style from "./OsnovnyeKomplektuyushhieDlyaPk.module.scss";

const OsnovnyeKomplektuyushhieDlyaPk = () => {
   return (
      <div className={style.container}>
         <h2>Основные комплектующие для ПК</h2>
         <CategoryList categoryArray={osnovnyeKomplektuyushhieArray} />
      </div>
   );
};

export default OsnovnyeKomplektuyushhieDlyaPk;
