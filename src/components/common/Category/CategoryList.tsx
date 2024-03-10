import { Category } from ".";
import style from "./CategoryList.module.scss";

interface CategoryListProps {
   categoryArray: {
      imageSrc: string;
      title: string;
      link: string;
   }[];
}

export const CategoryList = ({ categoryArray }: CategoryListProps) => {
   return (
      <div className={style.categories}>
         {categoryArray.map((item, index) => (
            <Category key={index} {...item} />
         ))}
      </div>
   );
};
