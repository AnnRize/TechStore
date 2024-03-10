import { Link } from "react-router-dom";
import logo from "../../assets/tech.svg";
import style from "./Logo.module.scss";

export const Logo = () => {
   return (
      <div className={style.logo}>
         <Link to={"/"}>
            <img src={logo} alt="logo" />
         </Link>
      </div>
   );
};
