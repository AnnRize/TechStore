import { useNavigate } from "react-router-dom";
import { HTMLAttributes } from "react";
import style from "./Category.module.scss";

interface CategorySubjectProps extends HTMLAttributes<HTMLElement> {
   imageSrc: string;
   title: string;
   link: string;
}

export const Category = ({
   imageSrc,
   title,
   link,
   ...props
}: CategorySubjectProps) => {
   const nav = useNavigate();
   return (
      <article
         className={style.categorySubject}
         onClick={() => nav(link)}
         {...props}
      >
         <div className={style.imageWrapper}>
            <img src={imageSrc} alt="" />
         </div>
         <p className={style.title}>{title}</p>
      </article>
   );
};
