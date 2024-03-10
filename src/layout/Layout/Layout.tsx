import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "components";
import style from "./Layout.module.scss";
import { Loader } from "interface";

export const Layout = observer(() => {
   return (
      <div className={style.container}>
         <Header />

         <main className={style.main}>
            <Suspense fallback={<Loader />}>
               <Outlet />
            </Suspense>
         </main>
      </div>
   );
});
