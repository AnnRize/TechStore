import { Link, useLocation } from "react-router-dom";
import style from "./RouteName.module.scss";

interface RouteNameProps {
   name: string;
   breadcrumbs?: boolean;
}

export const RouteName = ({ name, breadcrumbs = true }: RouteNameProps) => {
   const loc = useLocation();
   let currentLink = "";

   const breadcrumbsArray = loc.pathname
      .split("/")
      .filter((value) => value !== "")
      .map((path, index) => {
         currentLink += `/${path}`;
         return (
            <li key={index}>
               <Link to={currentLink}>{path}</Link>
            </li>
         );
      });

   return (
      <section className={style.breadCrumbs}>
         {breadcrumbs && (
            <nav>
               <ul>{breadcrumbsArray}</ul>
            </nav>
         )}

         <h2>{name}</h2>
      </section>
   );
};
