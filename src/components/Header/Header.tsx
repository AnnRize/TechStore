import favorite from "../../assets/favorite.svg";
import cart from "../../assets/cart.svg";
import searchIcon from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo, MyButton, MyInput } from "interface";
import style from "./Header.module.scss";

export const Header = () => {
   const [search, setSearch] = useState("");
   const [open, setOpen] = useState(false);
   const location = useLocation();

   useEffect(() => {
      setSearch("");
      setOpen(false);
   }, [location.pathname]);

   return (
      <header className={style.header}>
         <Logo />

         <div className={style.search}>
            <MyInput
               onChange={(e) => setSearch(e.currentTarget.value)}
               className={style.searchInput}
               placeholder="Поиск"
            />
            <Link
               onClick={(e) => {
                  if (!search) {
                     e.preventDefault();
                  }
               }}
               className={style.searchLink}
               to={{ pathname: "/search", search: `?q=${search}` }}
            >
               <img src={searchIcon} alt="" />
            </Link>
         </div>

         <nav className={style.navbar}>
            <Link to={"/favorite"}>
               <MyButton className={style.cartButton}>
                  <img src={favorite} alt="" />
               </MyButton>
            </Link>
            <Link to={"/cart"}>
               <MyButton className={style.cartButton}>
                  <img src={cart} alt="" />
               </MyButton>
            </Link>
         </nav>

         <div className={`${style.sideMenu} ${open && style.openMenu}`}>
            <div className={style.openMenuWrapper}>
               <MyButton
                  className={style.menuButton}
                  onClick={() => setOpen((e) => !e)}
               >
                  <img src={menu} alt="" />
               </MyButton>
            </div>
            <div className={style.search}>
               <MyInput
                  onChange={(e) => setSearch(e.currentTarget.value)}
                  className={style.searchInput}
                  placeholder="Поиск"
               />
               <Link
                  onClick={(e) => {
                     if (!search) {
                        e.preventDefault();
                     }
                  }}
                  className={style.searchLink}
                  to={{ pathname: "/search", search: `?q=${search}` }}
               >
                  <img src={searchIcon} alt="" />
               </Link>
            </div>

            <nav className={style.navbar}>
               <Link to={"/favorite"}>
                  <MyButton className={style.cartButton}>
                     <img src={favorite} alt="" />
                  </MyButton>
               </Link>
               <Link to={"/cart"}>
                  <MyButton className={style.cartButton}>
                     <img src={cart} alt="" />
                  </MyButton>
               </Link>
            </nav>
         </div>
      </header>
   );
};
